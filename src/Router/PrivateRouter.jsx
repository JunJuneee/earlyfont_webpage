import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { userInfo } from "../Module/user";

function PrivateRouter({ component: Component, isAuth, path, ...rest }) {
  const selectedUser = useSelector(userInfo);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (selectedUser.user) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: "/login" }} />;
        }
      }}
    />
  );
}

export default PrivateRouter;
