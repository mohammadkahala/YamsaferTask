import React from "react";
import { Route } from "react-router-dom";
import LogInPage from "./client/components/LogInPage/LogInPage";
import ShoppingPage from "./client/components/ShoppingPage/ShoppingPage";

export default () => (
  <div>
    <Route path="/" exact component={LogInPage}/>
    <Route path="/shopping" component={ShoppingPage}/>
  </div>
);