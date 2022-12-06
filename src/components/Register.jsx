import React, { useState } from "react";
import { registerUser } from "../api/auth";

const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            console.log(password, username);
            const token = await registerUser(username, password);
            setToken(token);
            localStorage.setItem("token", token);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <label htmlFor="username">Username :</label>
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="password">Password :</label>
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Register;
