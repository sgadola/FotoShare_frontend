import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {LoginComponent, LogoutComponent} from './components/base/LoginLogoutComponent';
import ErrorComponent from './components/base/ErrorComponent';

import {AuthenticatedRoute, UnauthenticatedRoute} from "./components/authentication/AuthenticatedRoute";
import HeaderComponent, {FooterComponent} from './components/base/HeaderFooteComponent';
import {WelcomeComponent} from './components/LocationsApp/WelcomeComponent';
import {ListLocationsComponent} from './components/LocationsApp/ListLocationsComponent';
import LocationComponent from "./components/LocationsApp/LocationComponent";
import {RegisterComponent} from "./components/base/RegisterComponent";


export default class LocationsApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={WelcomeComponent}/>
                        <UnauthenticatedRoute path="/register" exact component={RegisterComponent}/>
                        <UnauthenticatedRoute path="/login" exact component={LoginComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <AuthenticatedRoute path="/welcome" component={WelcomeComponent}/>

                        <AuthenticatedRoute path="/location/:id" component={LocationComponent}/>
                        <AuthenticatedRoute path="/locations" component={ListLocationsComponent}/>

                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        );
    }
}
