import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userData from "../data/user.json";


export default function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [show, setShow] = useState(false);


  const handleSignIn = () => {
    if (userData[username] && userData[username].password === password) {
      // alert(`Welcome back, ${userData[username].firstName}!`);
      navigate("/home");
    } else {
      setLoginError("Username and password do not match.");
    }
  };

  return (
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
              onClick={() => handleSignIn(true)}
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
            Not registered yet?{" "}
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

// toast state show
function DisplayToast({ showToast, userData }) {
  return (
    <div>
      toast
    </div>
    // <Row>
    //   <Col xs={6}>
    //     <Toast show={showToast} delay={3000} autohide>
    //       <Toast.Header>
    //         <strong className="me-auto">Success bhavik</strong>
    //       </Toast.Header>
    //       <Toast.Body>{`Welcome back, ${userData}!`}</Toast.Body>
    //     </Toast>
    //   </Col>
    //   {/* <Col xs={6}>
    //       <Button onClick={() => setShow(true)}>Show Toast</Button>
    //     </Col> */}
    // </Row>
  )
}

// function AutohideExample() {

//   return (

//   );
// }

// export default AutohideExample;
