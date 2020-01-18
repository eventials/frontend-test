import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

import Layout from "./components/layout";
import { isAuthenticated } from "./api/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn}></Route>
      <Route path="/signUp" component={SignUp}></Route>
      <PrivateRoute path="/main" component={Main} />
      <PrivateRoute path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
