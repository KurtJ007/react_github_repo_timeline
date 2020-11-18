import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loginImg from "../imgs/login-img.svg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="wrapper">
      <div className="container">
        <img src={loginImg} alt="github user" />
        <h1>Github User</h1>
        <button className="btn" onClick={loginWithRedirect}>
          Login / Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
