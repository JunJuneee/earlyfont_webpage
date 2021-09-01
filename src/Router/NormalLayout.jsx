import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FooterBlue from "../Components/Home/FooterBlue";

const NormalLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Component {...props} />
          <FooterBlue />
        </>
      )}
    />
  );
};

export default NormalLayout;
