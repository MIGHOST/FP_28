import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";
import MainPage from "./Containers/MainPage/MainPage";
import AddTransaction from "./Components/AddTransaction/AddTransaction";
import Statistic from "./Components/Statistic/Statistic";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/transaction" component={AddTransaction} />
        <Route path="/sta" component={Statistic} />
        <Route path="/" component={MainPage} />
      </Switch>
    </>
  );
};

export default App;
