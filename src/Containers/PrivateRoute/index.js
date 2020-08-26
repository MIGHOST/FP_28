import React from "react";
import { Route, Redirect } from "react-router-dom";
import Verified from "../../Components/Verified/Verified";
import { getFromLocaleStorage } from "../../helpers/storage";
const PrivateRoute = ({ component, ...rest }) => {
  const isAuth = getFromLocaleStorage("status");
  const Interface = component;
  switch (isAuth) {
    case "Verified":
      return <Route {...rest} render={(props) => <Interface {...props} />} />;
    case "Created":
      return <Route {...rest} render={(props) => <Verified {...props} />} />;
    default:
      return <Redirect to="/login" />;
  }
};
export default PrivateRoute;
