import Axios from "axios";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.css";

function LoginPage() {
  const [formObject, setFormObject] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleSubmit() {
    Axios.get(`/api/${formObject.username}`).then((res) => {
      if (res.data[0].username === formObject.username && res.data[0].password === formObject.password) {
        localStorage.setItem("loggedIn", "true")
        setIsLoggedIn(true)
      }
    });
  }

  return (
    <>
      <div className="main">
        <p className="sign" align="center">
          Sign in
        </p>
        <form className="form1">
          <input
            className="un "
            name="username"
            type="text"
            align="center"
            placeholder="Username"
            onChange={handleChange}
          ></input>
          <input
            className="pass"
            name="password"
            type="password"
            align="center"
            placeholder="Password"
            onChange={handleChange}
          ></input>
          <a className="submit" align="center" onClick={handleSubmit}>
            Sign in
          </a>
        </form>
      </div>
      
      {isLoggedIn ? <Redirect to="/drummachine"></Redirect> : <Link to="/">Register</Link>}
    </>
  );
}

export default LoginPage;
