import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";
import MainPage from "./Containers/MainPage/MainPage";
import AddTransaction from "./Components/AddTransaction/AddTransaction";
import Statistic from "./Components/Statistic/Statistic";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/operations/login";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (!Object.keys(user).length) dispatch(getUser());
  }, [dispatch, user]);

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
