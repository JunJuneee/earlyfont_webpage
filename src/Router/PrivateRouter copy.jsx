import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import user from "../Module/user";

const PrivateRouter = ({ component: Component, user, path, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (user?.user) {
        return <Component {...props} />;
      } else {
        return <Redirect to={{ pathname: "/login" }} />;
      }
    }}
  />
);

export default PrivateRouter;
