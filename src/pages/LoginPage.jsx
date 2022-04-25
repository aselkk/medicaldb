import React from 'react';
import './LoginPage.css'
import { NavLink } from "react-router-dom";


const LoginPage = () => {
    return (
        <div className='login-wrapper'>
            <div className='login-left'>
                <p className='db-text'>
                Medical Database for Research and Analysis
                </p>
            </div>
            <div className="login-right">
                <div className="div">
                    <h3 className="login-text">
                        Sign in
                    </h3>
                    <form action="" className="login-form">
                        <label  name='login' htmlFor="login" className="login-label">Login</label>
                        <input type="text" name='login' className="login-input" />
                        <label  name='password' htmlFor="password" className="login-label">Password</label>
                        <input type="password" name='password' className="login-input" />
                        <p className="forgot-pass">Forgot password?</p>

                    </form>
                    <NavLink style={{textDecoration:'none'}} to='/home'>
                        <div className="login-btn">
                            Sign in
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;