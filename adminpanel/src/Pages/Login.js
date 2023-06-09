import React, { useState } from "react";
import LoginForm from "../Component/LoginForm";
import { setAuthToken } from "../Auth/setAuthToken";
import api from "../api/api";
export default function Login() {
  const [data, setdata] = useState([]);
  const handleData = async (data) => {
    const response = await api.post("/admin/adminLogin", {
      email :data.email,
      password :data.password,

    });
    const json = await response.data;
    console.log (json);
    if (json.auth) {
      const token = json.token;
      localStorage.setItem("token", token);
      window.location.href = "/AddProduct";
      setAuthToken(token);
    } else {
     window.alert (json.message);
    }
  };

  return (
    <div>
      <LoginForm handleData={handleData} />
    </div>
  );
}
