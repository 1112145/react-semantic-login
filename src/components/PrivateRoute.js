
import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { localStorageConstant } from '../constant';


const PrivateRoute = ({ component: Component, authed, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem(localStorageConstant.USER) ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
    )} />
)

export default PrivateRoute;
