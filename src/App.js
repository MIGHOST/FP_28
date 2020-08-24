import React from "react";
<<<<<<< HEAD
import { Switch, Route } from "react-router-dom";
import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";
=======
>>>>>>> remotes/origin/F4-5-6-8-9
import MainPage from "./Containers/MainPage/MainPage";
import AddTransaction from "./Components/AddTransaction/AddTransaction";
import Statistic from "./Components/Statistic/Statistic";

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/transaction" component={AddTransaction} />
        <Route path="/sta" component={Statistic} />
        <Route path="/" component={MainPage} />
      </Switch>
=======
      {/* <h1>Final project</h1> */}
      <MainPage />
>>>>>>> remotes/origin/F4-5-6-8-9
    </>
  );
};

export default App;
