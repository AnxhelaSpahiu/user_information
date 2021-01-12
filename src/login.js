import React, { useState } from "react";
import { Router, Link, Redirect, navigate } from "@reach/router";

const Login = () => {
  const [input, setInput] = useState({
    id: Math.random,
    email: "",
    password: "",
  });

  //usually ktu perdorej null si defult
  const [logged, setLogged] = useState(false);
  const { id, email, password } = input;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((input) => ({ ...input, [name]: value }));
  };
  const getRegisteredUsers = () => {
    return localStorage.getItem("users");
  }; 

  const allUsers = getRegisteredUsers();
  const parsedUsers = JSON.parse(allUsers);
  const authUser = (allUsers, emailTryingToLogin) => {
    console.log(
      "LETS SEE WHAT ALL USERS PRINTS THE FIRST TIME TRYUNG TO LOGIN",
      allUsers
    );
    return allUsers.filter((singleUserInLoop) => {
      if (singleUserInLoop.email === emailTryingToLogin) {
        return emailTryingToLogin;
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const USERAT = authUser(parsedUsers, email);

    if (USERAT.length === 1) {
      console.log("Hi");

      localStorage.setItem("authenticatedUser", JSON.stringify(USERAT));
      return navigate("/userData");
    } else {
      alert(
        "Apparently your credentials do not exist in our database. Please review your credentials or Register to be part of us!"
      );
    }

    setInput((input) => ({
      email: "",
      password: "",
    }));
  };

  return (
    <div className="Register-Login">
      <div className="Register-Login-Inner">
        <h1>Well, well, well, look who is back. Login here!</h1>
        <Link to="/">
          <button className="Button">Go to homepage</button>
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="Form">
            <label>
              Email
              <input
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
              ></input>
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
              ></input>
            </label>
          </div>
          <button disabled={!(email && password)}>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;

