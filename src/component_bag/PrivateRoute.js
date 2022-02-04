import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, DEACTIVATE_USER, USER, ...rest}) => {
  let state = localStorage.getItem("appState");
  let AppState = JSON.parse(state);
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
          AppState.isLoggedIn?
                <Component {...props} DEACTIVATE_USER={DEACTIVATE_USER} USER={USER} />
            : <Redirect to='/emailform'/>
        )} />
    );
};

export default PrivateRoute;