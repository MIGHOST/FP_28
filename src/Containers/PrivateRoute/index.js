import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component, ...rest }) => {
  const isAuth = useSelector((state) => state.session.user.status);

  const Interface = component;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth === "Verified" ? (
          <Interface {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
export default PrivateRoute;
