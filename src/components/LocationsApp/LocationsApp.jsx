import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {LoginComponent, LogoutComponent} from '../base/LoginLogout';
import ErrorComponent from '../base/ErrorComponent';

import AuthenticatedRoute from "../authentication/AuthenticatedRoute";
import HeaderComponent, {FooterComponent} from '../base/HeaderFooter';
import {WelcomeComponent} from './WelcomeComponent';
import {ListLocationsComponent} from './ListLocationsComponent';
import LocationComponent from "./LocationComponent";


export default class LocationsApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={WelcomeComponent}/>
                        <Route path="/login" exact component={LoginComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>

                        <AuthenticatedRoute path="/todos/:id" component={LocationComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListLocationsComponent}/>

                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        );
    }
}
