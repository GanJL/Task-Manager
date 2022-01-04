import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { register } from '../../actions/userActions';
import { useDispatch } from 'react-redux'
const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errmsg, setErrMsg] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [name, setName] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(()=>{
        
        const userInfo = localStorage.getItem("userInfo")

        if (userInfo) {
            navigate("/tasks");
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
            navigate("/tasks")
            
        }


    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    className=""
                    name="name"
                    placeholder="Enter Name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />      
                <input
                    type="text"
                    className=""
                    name="email"
                    placeholder="Enter Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />      
                <input
                    type="password"
                    className=""
                    name="password"
                    placeholder="Enter Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    />
                <input
                    type="password"
                    className=""
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    onChange={e => setConfirmPassword(e.target.value)}
                    value={confirmpassword}
                    />
                          
               <button onClick = {handleSubmit} className="button" >Register</button>
            
               {errmsg && <div>{errmsg}</div>}
            </form>
        </div>  
    )
}

export default Register
