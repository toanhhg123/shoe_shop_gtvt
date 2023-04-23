import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { login, register } from "../api/auth";
import { AuthContext } from "../context/userContext";

const Register = () => {
  const { cookies, loadCookies } = useContext(AuthContext);
  const [user, setUser] = useState({ gioiTinh: "1" });

  const ChangeHandle = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  const Clicked = () => {
    console.log(user);
    register(user)
      .then(async (data) => {
        await login(data.username, data.password);
        loadCookies();
      })
      .catch((e) => console.log(e.message));
  };

  if (cookies) return <Redirect to="/" />;
  return (
    <div className="form__auth">
      <h1>Login Form</h1>
      <h3>phone:</h3> <input type="text" name="sđt" onChange={ChangeHandle} />
      <h3>email:</h3>{" "}
      <input type="email" name="email" onChange={ChangeHandle} />
      <h3>Mat Khau:</h3>
      <input type="password" name="matKhau" onChange={ChangeHandle} />
      <h3>Ho ten:</h3>
      <input name="hoTen" onChange={ChangeHandle} />
      <h3>Gioi Tinh:</h3>
      <select name="gioiTinh" onChange={ChangeHandle}>
        <option value="1">Nam</option>
        <option value="2">Nu</option>
      </select>
      <button onClick={Clicked}>Submit</button>
    </div>
  );
};

export default Register;
