import React from "react";
import '../elements/signin.css'
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <>
     <main id="main-content">
        <section id="login-section">
            <div className="container" id="login-container">
                <h1 id="login-title">Login</h1>
                <form id="login-form" action="submit_login" method="POST">
                    <div className="form-group" id="email-group">
                        <label htmlFor="email" id="email-label">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your Email" className="form-input" required />
                    </div>
                    <div className="form-group" id="password-group">
                        <label htmlFor="password" id="password-label">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter your Password" className="form-input" required />
                        <button type="submit" id="login-button">Login</button>
                    </div>
                   
                </form>
                <p id="signup-text">Don't have an account?   <NavLink to="/signup" className="nav-texts" >
         <a href="signup.html" id="signup-link">Sign up here</a>
        </NavLink></p>
            </div>
        </section>
    </main>
    </>
  );
};

export default Signin;
