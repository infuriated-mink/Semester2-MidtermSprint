import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import userData from "../data/user.json";

export default function Auth({ isSignUp }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(true);

  const notify = (user) => {
    setIsToastOpen(true);
    toast(
      `Welcome ${user.firstName}`,
      { position: toast.POSITION.TOP_CENTER },
      { autoclose: 4000 },
      { onClose: () => setIsToastOpen(false) }
    )
  };

  function wait(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }

  async function goToPage() {
    await wait(5000);
    navigate(`/home`);
  }

  const handleLogin = () => {
    if (userData[username] && userData[username].password === password) {
      const user = userData[username];
      notify(user);
      goToPage();
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
      <ToastContainer />
    </div>
  );
}


// referece: https://stackoverflow.com/questions/49840197/how-can-i-set-delay-function-in-react-routing
