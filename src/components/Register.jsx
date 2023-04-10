import React, { useState } from "react";
import { registerUser } from "../api/auth";
const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // call some function send it the username and password
    // we just created and then that function will take that
    // information and create a new user in the backend.
    const token = await registerUser(username, password);

    localStorage.setItem("token", token);
    setToken(token);
    console.log(username, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="username"
        ></input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="password"
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
