import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getFromLocaleStorage } from "../../helpers/storage";

const PrivateRoute = ({ component, ...rest }) => {
  const isStatus = getFromLocaleStorage("status");
  const Interface = component;
  return (
    <Route
      {...rest}
      render={(props) =>
        isStatus === "Verified" ? (
          <Interface {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
export default PrivateRoute;
