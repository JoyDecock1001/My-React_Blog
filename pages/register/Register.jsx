import "./register.css";
import React from "react";

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>UserName</label> 
                <input type="text" className="registerInput" placeholder="Your Good name..."/>
                <label>Email</label> 
                <input type="email" className="registerInput" placeholder="Your Email..."/>
                <label>Password</label> 
                <input type="password" className="registerInput" placeholder="*********"/>
                <button className="registerButton">Get this Done</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}
