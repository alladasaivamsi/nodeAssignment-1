import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8080/dashboard")
      .then((res) => {
        if (res.data.valid) {
          setMessage(res.data.message);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  });

  return <div>Dashboard {message}</div>;
};

export default Dashboard;
