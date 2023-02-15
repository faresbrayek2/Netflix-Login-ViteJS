import React from 'react';
import "../css/login.css";
import Logo from "../assets/nt_logo.svg";

const Login = () => (
  
  <div>
    <div className="login__logo">
      <img src={Logo} />
    </div>
    <div className="container">

    <div className="login">
      <h1 className="login__title">Sign In</h1>
      <div className="login__group">
        <input type="text" required className="login__group__input" />
        <label className="login__group__label">Email or phone number</label>
      </div>
      <div className="login__group">
        <input type="password" required className="login__group__input" />
        <label className="login__group__label">Password</label>
      </div>
      <button className="login__sign-in">Sign In</button>
      <div className="login__secondary-cta">
        <a href="#" className="login__secondary-cta__text">Remember me</a>
        <a href="#" className="login__secondary-cta__text login__secondary-cta__text--need-help">Need help?</a>
      </div>
      <div className="form-text">
        <p>New to Netflix? <a href="#" className='singup'>Sign up now</a>.</p>
        </div>
        <div className="form-text2">
        <p>
          <br />This page is protected by Google reCAPTCHA to<br />
          ensure you're not a bot. <a href="#" className='aaaa'>Learn more</a>.      </p>

      </div>
    </div>
    </div>


  </div>
);


const styles = {
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  footerText: {
    margin: "0",
    fontSize: "0.9rem"
  },
  footerLinks: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px"
  },
  footerSelect: {
    marginTop: "10px",
    fontSize: "0.9rem",
    backgroundColor: "#333",
    color: "#fff",
    border: "none"
  }
};


export default Login;
