import React, { useState } from "react";
import { Router, Link } from "@reach/router";

const Register = () => {
  const [input, setInput] = useState({
    id: Math.random,
    name: "",
    surname: "",
    email: "",
    password: "",
    img: "https://www.w3schools.com/howto/img_avatar2.png",
  });

  const { id, name, surname, email, password } = input;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((input) => ({ ...input, [name]: value }));
  };
  const getRegisteredUsers = () => {
    return localStorage.getItem("users");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const prevData = getRegisteredUsers();
    let prevDataArray = [];
    if (prevData) {
      prevDataArray = JSON.parse(prevData);
      prevDataArray.push(input);
      localStorage.setItem("users", JSON.stringify(prevDataArray));
      console.log("JSON", prevDataArray);
    } else {
      prevDataArray.push(input);
      localStorage.setItem("users", JSON.stringify(prevDataArray));
    }

    setInput((input) => ({
      name: "",
      surname: "",
      email: "",
      password: "",
    }));

    /*  writeToDb()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("ahahha");*/
  };

  return (
    <div className="Register-Login">
      <div className="Register-Login-Inner">
        <h1>Register here so we get to know you!</h1>
        <Link to="/">
          <button className="Button">Go to homepage</button>
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="Form">
            <label>
              Name
              <input
                id="name"
                type="text"
                value={name}
                name="name"
                onChange={handleChange}
                required
              ></input>
            </label>

            <label>
              Surname
              <input
                id="surname"
                type="text"
                value={surname}
                name="surname"
                onChange={handleChange}
                required
              ></input>
            </label>

            <label>
              Email
              <input
                id="email"
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
                required
              ></input>
            </label>

            <label>
              Password
              <input
                id="email"
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                required
              ></input>
            </label>
          </div>
          <button class="Button">I'm in</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
