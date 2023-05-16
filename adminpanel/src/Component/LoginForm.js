import React, { useState } from "react";
import { setAuthToken } from "../Auth/setAuthToken";
import "../ComponentStyle/LoginForm.css";
export default function LoginForm(props) {
  const initValue = { email: "", password: "" };
  const [data, setdata] = useState(initValue);
  const handleSubmit = async (e) => {
    e.preventDefault();
    props.handleData(data);
  };

  const handleEmailInput = (e) => {
    setdata({ ...data, email: e.target.value });
  };
  const handlePasswordInput = (e) => {
    setdata({ ...data, password: e.target.value });
  };
  return (
    <div className="login-form-holder">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type={"email"}
          required
          className="email-input"
          placeholder="Please enter your email"
          onInput={handleEmailInput}
        ></input>
        <input
          type={"password"}
          required
          className="password-input"
          placeholder="Please Enter Your Password"
          onInput={handlePasswordInput}
        ></input>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
