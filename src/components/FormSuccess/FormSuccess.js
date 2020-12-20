import React from "react";
import { Redirect } from "react-router-dom";

const FormSuccess = () => {
  function setLogIn() {
    localStorage.setItem("loggedIn", "true");
  }

  setLogIn();
  return (
    // <div className="form-content-right">
    //     <div className="form-success"> We have received your request!</div>
    //     <img src="img/back.jpg" alt="success-image" className="form-img-2"/>
    // </div>
    <Redirect to="/drummachine"></Redirect>
  );
};

export default FormSuccess;
