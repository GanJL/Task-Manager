import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions';



const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin

    useEffect(()=>{
        
        if (userInfo) {
            navigate("/tasks");
        }
    
    })
    
    const reRoute = () => {
        navigate("/register")
    }
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
                    className=""
                    name="email"
                    placeholder="Enter Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    className="registerInput"
                />      
                <label className='registerLabel'>Password</label>
                <input
                    type="password"
                    className=""
                    name="password"
                    placeholder="Enter Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    className="registerInput"
                    />

                <a href='' className="reRouteLogin" onClick={reRouteRegister}>Need an account? Click to register!</a>

                <div className='container text-center'>
                    <button onClick = {handleSubmit} className="mt-3 newbtn">Login</button>
                </div>

            </form>
            </div>
        </div>
    )
}

export default Login
