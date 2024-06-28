import React from "react";
import '../elements/signin.css'

const Signin = () => {
  return (
    <>
     <main id="main-content">
        <section id="login-section">
            <div class="container" id="login-container">
                <h1 id="login-title">Login</h1>
                <form id="login-form" action="submit_login" method="POST">
                    <div class="form-group" id="email-group">
                        <label for="email" id="email-label">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your Email" class="form-input" required />
                    </div>
                    <div class="form-group" id="password-group">
                        <label for="password" id="password-label">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter your Password" class="form-input" required />
                    </div>
                    <button type="submit" id="login-button">Login</button>
                </form>
                <p id="signup-text">Don't have an account? <a href="signup.html" id="signup-link">Sign up here</a>.</p>
            </div>
        </section>
    </main>
    </>
  );
};

export default Signin;
