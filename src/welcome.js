import React from "react";
import { Router, Link } from "@reach/router";
import Login from "./login.js";
import Register from "./register.js";

const Welcome = () => {
  return (
    <div className="Welcome">
      <h1> Welcome! Skincare, because we care.</h1>
      <p>
        Login our page to get the latest news, or if you do not have an account
        yet register below
      </p>
      <div>
        <Link to="/login">
          <button className="Button">Login</button>
        </Link>
      </div>
      <div>
        <Link to="/register">
          <button className="Button">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
