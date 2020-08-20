import React from "react";
import Registration from "./Containers/Registration/Registration";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Final project</h1>
            <Switch>
        <Route path="/registration" component={Registration} />
      </Switch>
    </>
  );
};

export default App;
