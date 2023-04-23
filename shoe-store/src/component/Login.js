import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { login } from "../api/auth";
import { AuthContext } from "../context/userContext";

const Login = () => {
  const { cookies, loadCookies } = useContext(AuthContext);
  const [user, setUser] = useState({});

  const ChangeHandle = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  const Clicked = () => {
    login(user.phone, user.password)
      .then((data) => {
        loadCookies();
      })
      .catch((e) => console.log(e.message));
  };

  if (cookies) return <Redirect to="/" />;
  return (
    <div className="form__auth">
      <h1>Login Form</h1>
      <h3>phone:</h3>{" "}
      <input
        type="text"
        name="phone"
        value={user.Name}
        onChange={ChangeHandle}
      />
      <h3>Password:</h3>
      <input
        type="password"
        name="password"
        value={user.Password}
        onChange={ChangeHandle}
      />
      <button onClick={Clicked}>Submit</button>
    </div>
  );
};

export default Login;
