import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions';
import Loading from "../../components/Loading"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useSelector to retrieve state from store
    const userLogin = useSelector((state) => state.userLogin);
    // retrieve specific objects from state payload
    const { loading, userInfo, error } = userLogin

    useEffect(()=>{
        
        if (userInfo) {
            navigate("/");
        }
    
    })
    
    const handleSubmit = async (event) => {

        event.preventDefault();

        dispatch(login(email, password))

    }

    const reRouteRegister = () => {
        navigate("/register")
    }

    return (
        <div className='fullPage d-flex'>
            <h1 className='registerHeader'>Login</h1>
            <div className='centerContainer'>
            <form>
                <label className='registerLabel'>Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    className="registerInput"
                />      
                <label className='registerLabel'>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    className="registerInput"
                    />

                <a className="reRouteLogin" onClick={reRouteRegister}>Need an account? Click to register!</a>

                {error && <div className='registerError'>{error}</div>}

                {loading && <Loading />}

                <div className='container text-center'>
                    <button onClick = {handleSubmit} className="mt-3 newbtn">Login</button>
                </div>
                
                <div className='mt-3'>
                    <span className='text-muted fs-6'>Test Account: Email: test_account@gmail.com | Password: test123</span>
                </div>

            </form>
            </div>
        </div>
    )
}

export default Login
