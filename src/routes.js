import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuth } from "./api/auth";

import Login from "./components/view/login";
import Register from "./components/view/register";
const PrivateRoute = ( {component: Component}, ...rest ) => (
    <Route {...rest} render={ props => 
        isAuth() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/', state: { from: props.location } }} />
        )

    } 
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/app" component={() => <h1>Logado</h1> }/>
        </Switch>
    </BrowserRouter>
);

export default Routes;