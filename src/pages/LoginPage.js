import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function LoginPage() {
  return (
    <>
      <div class="main">
        <p class="sign" align="center">
          Sign in
        </p>
        <form class="form1">
          <input
            class="un "
            type="text"
            align="center"
            placeholder="Username"
          ></input>
          <input
            class="pass"
            type="password"
            align="center"
            placeholder="Password"
          ></input>
          <a class="submit" align="center">
            Sign in
          </a>
        </form>
      </div>
      <Link to="/">Register</Link>
    </>
  );
}

export default LoginPage;
