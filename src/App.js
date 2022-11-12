import React, { Fragment } from "react";

import { Route, Switch } from "react-router-dom";

import Admin from "./layout/Admin";
import Client from "./layout/Client";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Client} />
      </Switch>
    </Fragment>
  );
}

export default App;
