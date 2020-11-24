import React from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import Login from "./login.js";
import Register from "./register.js";
import Welcome from "./welcome.js";
import UserData from "./userData";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Welcome path="/" />
        <Login path="/login" />
        <Register path="/register" />
        <UserData path="/userData" />
      </Router>
    </div>
  );
};

export default App;
