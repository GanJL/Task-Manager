import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { register } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux'
import Loading from "../../components/Loading"

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errmsg, setErrMsg] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [name, setName] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, error, loading } = userRegister

    useEffect(()=>{
        
        if (userInfo) {
            navigate("/");
        }
    
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (password !== confirmpassword) {
            setErrMsg("Passwords do not match")
        }
        else if (password.length < 6) {
            setErrMsg("Password length must be at least 6 characters")
        } 
        else if (!email.includes("@")) {
            setErrMsg("Invalid email")
        }
        else {

            dispatch(register(email, password, name))

        }
    }

    const reRouteLogin = () => {
        navigate("/login")
    }

    return (
        <div className='fullPage d-flex'>
            <h1 className='registerHeader'>Register</h1>
            <div className='centerContainer'>
                <form>
                    <label className='registerLabel'>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name (Max 20 Characters)"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        className="registerInput"
                        maxLength={'20'}
                    />
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
                        placeholder="Enter Password (Min 6 Characters)"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        className="registerInput"
                        />
                    <label className='registerLabel'>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmpassword"
                        placeholder="Confirm Password"
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirmpassword}
                        className="registerInput"
                        />

                <a className="reRouteLogin" onClick={reRouteLogin}>Already a user? Click to login!</a>
                
                {errmsg && <div className='registerError'>{errmsg}</div>}
                
                {error && <div className='registerError'>{error}</div>}

                {loading && <Loading />}

                <div className='container text-center'>
                    <button onClick = {handleSubmit} className="mt-3 newbtn">Register</button>
                </div>

                </form>
            </div>
            
        </div>  

    )
}

export default Register
