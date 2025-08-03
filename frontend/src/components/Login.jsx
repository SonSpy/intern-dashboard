import React from "react";
import "../App.css";

function Login({ onLogin }) {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Intern Portal</h2>
        <p className="subtext">Sign in to access your dashboard</p>
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-button" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
