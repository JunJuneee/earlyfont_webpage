import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import user from "../Module/user";

const PrivateRouter = ({ component: Component, isAuth, path, ...rest }) => {
  <Route
    {...rest}
    render={(props) => {
      if (isAuth) {
        return <Component {...props} />;
      } else {
        return <Redirect to={{ pathname: "/login" }} />;
      }
    }}
  />;
};

export default PrivateRouter;