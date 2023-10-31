import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userData from "../data/user.json";

export default function Auth({ isSignUp }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    if (userData[username] && userData[username].password === password) {
      const user = userData[username];
      alert(`Welcome back, ${user.firstName}!`);
      navigate("/home");
    } else {
      setLoginError("Username and password do not match.");
    }
  };

  const handleSignUp = () => {
    if (userData[username]) {
      setLoginError("Username already exists. Please choose another.");
    } else {

      userData[username] = {
        password,
        firstName: name, 
        email: email, 
      };

      navigate("/home");
    }
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
            Forgot <Link to="#">password?</Link>
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
