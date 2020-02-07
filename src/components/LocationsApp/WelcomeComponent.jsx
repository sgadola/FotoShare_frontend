import React, {Component} from "react";
import {Link} from "react-router-dom";
import AuthenticationService from "../authentication/AuthenticationService";


export class WelcomeComponent extends Component {

    render() {
        let username = AuthenticationService.getLoggedInUserName();

        return (
            <div>
                <div className="container">
                    <br/>
                    <h3>Willkommen {username && username + ","} zur Locations App.<br/></h3>
                    Sie können <Link to="/todos">hier</Link> Ihre eigenen Locations die Sie besucht haben eintragen und
                    bearbeiten,<br/>
                    Sie können n&auml;mlich auch Orte anzeigen, die andere Benutzer bereits erstellt haben.<br/>
                    <br/>
                    <h5>Benutzerliste</h5>
                    Bitte wähle sie unten aus der Benutzerliste den Benutzer aus, dessen Locations Sie anzeigen
                    wollen.<br/>
                    <ul>
                        <li>User 1</li>
                    </ul>
                </div>
            </div>
        )
    }
}
