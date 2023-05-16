import React, { useState } from "react";
import LoginForm from "../Component/LoginForm";
import { setAuthToken } from "../Auth/setAuthToken";
export default function Login() {
  const [data, setdata] = useState([]);
  const handleData = async (data) => {
    console.log(data);
    const response = await fetch("http://localhost:4111/admin/adminLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });
    const json = await response.json();
    if (json.auth) {
      const token = json.token;
      console.log(token);
      localStorage.setItem("token", token);
      console.log(localStorage.getItem);
      window.location.href = "/AddProduct";
      setAuthToken(token);
    } else {
      console.log(json.message);
    }
  };

  return (
    <div>
      <LoginForm handleData={handleData} />
    </div>
  );
}
