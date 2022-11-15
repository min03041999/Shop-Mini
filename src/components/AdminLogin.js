import React from "react";

import LogoFox from "../assets/images/logo-fox.png";
const AdminLogin = () => {
  return (
    <div className="admin-login">
      <div className="admin-login_container grid-column">
        <div className="admin-login_container_left">
          <div className="login-title">Login Account</div>
          <form className="login-form">
            <div className="login-form-group">
              <label className="label">Address Email:</label>
              <input className="input" type="text" name="email" />
            </div>
            <div className="login-form-group">
              <label className="label">Password:</label>
              <input className="input" type="password" name="password" />
            </div>
            <div className="login-form-button">
              <div>Nie pamietasz hasia?</div>
              <input className="button-submit" type="submit" value="Login" />
            </div>
          </form>
        </div>
        <div className="admin-login_container_right">
          <img className="login-logo" src={LogoFox} alt="logo-fox" />
          <div className="login-title">Witaj ponwine!</div>
          <div className="login-content-1">
            Zaloguj sie i korzystaj z mozliwasci daje nasz protal
          </div>
          <div className="login-content-2">Nie posiadasz konta?</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
