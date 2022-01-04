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



        // const data  = await fetch(API_BASE + "/users/login", {
		// 	method: "POST",
		// 	headers: { 
		// 		"Content-Type": "application/json" 
		// 	},
		// 	body: JSON.stringify({ email, password })

		// }).then(res => res.json())
        // .catch(err=> console.log(err));

        // localStorage.setItem("userInfo", JSON.stringify(data))
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    className=""
                    name="email"
                    placeholder="Enter Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />      
                <input
                    type="text"
                    className=""
                    name="password"
                    placeholder="Enter Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    />
                          
               <button onClick = {handleSubmit} className="button" >Create Task</button>
               <button onClick = {reRoute} className="button" >Register</button>
            </form>
        </div>
    )
}

export default Login
