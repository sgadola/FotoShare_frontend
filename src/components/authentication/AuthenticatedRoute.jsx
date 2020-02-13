import React, {Component} from 'react';

import {Route} from 'react-router-dom';
import Redirect from "react-router-dom/es/Redirect";

import AuthenticationService from "./AuthenticationService";


export class AuthenticatedRoute extends Component {

    render() {
        if (AuthenticationService.isUserLoggedIn())
            return <Route {...this.props}/>;
        else
            return <Redirect to="/login"/>;
    }
}


export class UnauthenticatedRoute extends Component {

    render() {
        if (!AuthenticationService.isUserLoggedIn())
            return <Route {...this.props}/>;
        else
            return <Redirect to="/"/>;
    }
}
