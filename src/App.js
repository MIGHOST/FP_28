import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";
import MainPage from "./Containers/MainPage/MainPage";
import AddTransaction from "./Components/AddTransaction/AddTransaction";
import Statistic from "./Components/Statistic/Statistic";
import PrivateRoute from "./Containers/PrivateRoute/index";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/transaction" component={AddTransaction} />
        <PrivateRoute path="/sta" component={Statistic} />
        <PrivateRoute path="/" component={MainPage} />
      </Switch>
    </>
  );
};

export default App;
