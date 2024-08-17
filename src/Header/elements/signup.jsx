import React from 'react'
import './signup.css'
import { NavLink } from "react-router-dom";
export default function signup() {
  return (
    <>
    <main id="main-content">
      <section id="signup-section">
        <div className="container" id="signup-container">
          <h1 id="signup-title">Sign Up</h1>
          <form id="signup-form" action="submit_signup" method="POST">
            <div className="form-group" id="name-group">
              <label htmlFor="name" id="name-label">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your Name" className="form-input" required />
            </div>
            <div className="form-group" id="email-group">
              <label htmlFor="email" id="email-label">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your Email" className="form-input" required />
            </div>
            <div className="form-group" id="password-group">
              <label htmlFor="password" id="password-label">Password:</label>
              <input type="password" id="password" name="password" placeholder="Enter your Password" className="form-input" required />
            </div>
            <button type="submit" id="signup-button">Sign Up</button>
          </form>
          <p id="login-text">Already have an account?<NavLink to="/signin" className="nav-texts" >
         <a  id="signup-link">Login here</a>
        </NavLink></p>
        </div>
      </section>
    </main>
  </>
  )
}
