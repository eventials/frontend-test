import React from 'react';
import Login from '../pages/Login/index';
import Countries from '../pages/Countries/index';
import {isAuthenticated} from '../utils/auth';
import {
    Route,
    Switch,
    Redirect,
    BrowserRouter as Router,
} from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({location}) =>
                isAuthenticated() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: {from: location},
                        }}
                    />
                )
            }
        />
    );
};

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <PrivateRoute path="/countries">
                    <Countries />
                </PrivateRoute>
            </Switch>
        </Router>
    );
};

export default Routes;
