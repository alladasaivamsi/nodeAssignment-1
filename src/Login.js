import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const hanldeSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", { email, password })
      .then((res) => {
        if (res.data.Login) {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <h2>Login</h2>
        <form onSubmit={hanldeSubmit}>
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
          <button type="submit">Login</button>
        </form>
        <p>Don't have Account?</p>
        <button>Register </button>
      </div>
    </div>
  );
};

export default Login;
