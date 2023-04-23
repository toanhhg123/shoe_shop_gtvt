import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/userContext";

const PrivateRoute = ({ ...rest }) => {
  const { cookies } = useContext(AuthContext);
  if (!cookies) return <Redirect to="/login" />;
  return <Route {...rest} />;
};

export default PrivateRoute;
