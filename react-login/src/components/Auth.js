import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Auth({ isSignUp }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    // Define your user data with usernames and passwords
    const userData = {
      user1: "password1",
      user2: "password2",
    };

    // Check if the entered username and password match
    if (userData[username] === password) {
      navigate("/home");
    } else {
      setLoginError("Username and password do not match.");
    }
  };

  const handleSignUp = () => {
    navigate("/home"); // Navigate to the home page
    window.alert("Sign Up was successful!");
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">{isSignUp ? "Sign Up" : "Sign In"}</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isSignUp && (
            <>
              <div className="form-group mt-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </>
          )}
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={isSignUp ? handleSignUp : handleLogin}
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            {loginError && <span className="error-message">{loginError}</span>}
            <br />
            Forgot <a href="#">password?</a>
          </p>
          <div className="text-center mt-3">
            {isSignUp ? (
              <>
                Already registered?{" "}
                <Link to="/signin">Sign In</Link>
              </>
            ) : (
              <>
                Not registered yet?{" "}
                <Link to="/signup">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}