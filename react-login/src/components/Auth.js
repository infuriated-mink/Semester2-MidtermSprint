import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "../css/login.css";
import 'react-toastify/dist/ReactToastify.css';
import userData from "../data/user.json";

export default function Auth() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  return (
    <div className="mainbox">
        <div className="header">
          <div className="horizontal-bar"></div>
          <div className="logo-center">
          <div className="flex mx-auto">
          <img src="/media/logo.png" alt="logo" style={{ width: "150px" }} />
          <div className="slogan">Build better recipes, together!</div>
        </div>
          </div>
        </div>
        <div class = "horizontal-bar2"></div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
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
            <div className="d-grid gap-2 mt-3">
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              {loginError && <span className="error-message">{loginError}</span>}
              <br />
            </p>
            <div className="text-center mt-3">
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
