import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Categories from "../components/Categories/Categories";

const RoutesAdmin = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} component={Categories} exact />
    </Switch>
  );
};

export default RoutesAdmin;
