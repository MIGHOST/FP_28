import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
};

export default App;
