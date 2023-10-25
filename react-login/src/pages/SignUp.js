import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSignUp = () => {

    navigate("/index.html");
    window.alert("Sign Up was successful!");
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
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
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSignUp}
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            {loginError && <span className="error-message">{loginError}</span>}
            <br />
            Already registered? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
