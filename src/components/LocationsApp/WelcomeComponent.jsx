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
                    Sie können <Link to="/locations">hier</Link> Ihre eigenen Locations die Sie besucht haben hinzufügen und bearbeiten,<br/>
                    oder Sie können auch die Orte anzeigen, welche die anderen unten aufgelisteten Benutzer bereits erstellt haben.<br/>
                    <br/>
                    <h5>Benutzerliste</h5>
                    Bitte w&auml;hlen Sie unten aus der Benutzerliste den Benutzer aus, dessen Locations Sie anzeigen wollen.<br/>
                    <ul>
                        <li><Link to="/locations">Benutzer 1</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
