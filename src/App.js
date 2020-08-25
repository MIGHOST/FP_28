import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";
import MainPage from "./Containers/MainPage/MainPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/" component={MainPage} />
      </Switch>
    </>
  );
};

export default App;
