import React from "react";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const Login = ({ setIsLogin }) => {
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    setIsLogin(true);
    history.push("/mainpage");
  }

  return (
    <>
      <section id="loginmaindiv" >

        <div className="container">
            <div className="row">
                <div className="col-12" id="cennt">

              
        <img src={logo} className="loginlogo" style={{ textAlign: "center" }} />

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mainlogininput">
            <div>
              <input
                type="text"
                className="logininp"
                placeholder="Please Enter Email "
              />
            </div>

            <div style={{ marginTop: "25px" }}>
              <input
                type="text"
                className="logininp"
                placeholder="Enter Password "
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <button className="loginbtn">Login In</button>
            </div>
          </div>
        </form>


        </div>

</div>

</div>
      </section>
    </>
  );
};

export default Login;
