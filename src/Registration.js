import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const navigate = useNavigate();

  const hanldeSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/register", { name, email, password })
      .then((res) => navigate("/login"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <h2>Register</h2>
        <form onSubmit={hanldeSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              placeholder="Confirm Password"
              autoComplete="off"
              name="confirmpassword"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
