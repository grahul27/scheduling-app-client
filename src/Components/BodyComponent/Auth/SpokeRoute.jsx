import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../../../Common/helpers";

// this is the component that will be used for rendering if the user is authenticated and role us admin
const SpokeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth() && isAuth().role === "spoke" ? (
        <Component {...props}></Component>
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location },
          }}
        />
      )
    }
  ></Route>
);
export default SpokeRoute;
