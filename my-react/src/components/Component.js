import React, { useState } from "react";
import "../CSS/Component.css";

function Signupandsignin() {
  const [signIn, toggleSignIn] = useState(true);

  const toggleForm = () => {
    toggleSignIn(!signIn);
  };

  return (
    <div className="container">
      <div className={`signup-container ${signIn ? "signin" : ""}`}>
        <form>
          <h1>REGISTER</h1>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Address" />
          <input type="Zip Code" placeholder="Zip Code" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Re-enter Password" />
          <label className="terms-label"><input type="checkbox" /><span>I agree to the Terms and Conditions</span></label>
          <button>Sign Up</button>
        </form>
      </div>

      <div className={`signin-container ${signIn ? "" : "signin"}`}>
        <form>
          <h1>SIGN-IN</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>

      <div className={`overlay-container ${signIn ? "signin" : ""}`}>
        <div className={`overlay ${signIn ? "signin" : ""}`}>
          <div className="overlay-panel left-overlay-panel">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please login with your personal info</p>
            <p>Don't have an Account</p>
            <button className="ghost-button" onClick={toggleForm}>
              Sign up
            </button>
          </div>

          <div className="overlay-panel right-overlay-panel">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <p>Already have an Account</p>
            <button className="ghost-button" onClick={toggleForm}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signupandsignin;
