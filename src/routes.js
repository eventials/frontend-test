import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuth } from "./api/auth";


//Views imports
import Login from "./components/view/login";
import Register from "./components/view/register";
import Main from "./components/view/main";

//create privates routes
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


//list all routes
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/main" component={ Main }/>
        </Switch>
    </BrowserRouter>
);

export default Routes;