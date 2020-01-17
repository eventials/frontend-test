import React from "react";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import { Switch, Route } from "react-router-dom";
import Theme from "./components/theme";
import Layout from "./components/layout";

export default () => (
  <Theme>
    <Switch>
      <Route path="/" exact component={SignIn}></Route>
      <Layout>
        <Route path="/main" component={Main}></Route>
      </Layout>
    </Switch>
  </Theme>
);
