import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import AuthenticationService from "../authentication/AuthenticationService";


class HeaderComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <div className="navbar-brand" ><Link className="nav-link" to="/">Locations App</Link></div>
                    </div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn &&
                        <li>
                            <Link className="nav-link" to="/locations">Locations anzeigen&nbsp;&nbsp;&nbsp;|</Link>
                        </li>}
                        {isUserLoggedIn &&
                        <li>
                            <Link className="nav-link" to="/location/-1">Location hinzufügen</Link>
                        </li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn &&
                        <li>
                            <Link className="nav-link" to="/login">Anmelden</Link>
                        </li>}
                        {!isUserLoggedIn &&
                        <li>
                            <Link className="nav-link" to="/register">Registrieren</Link>
                        </li>}
                        {isUserLoggedIn &&
                        <li>
                            <Link className="nav-link"
                                  to="/logout"
                                  onClick={AuthenticationService.logout}>Logout</Link>
                        </li>}
                    </ul>
                </nav>
            </header>
        )
    }
}


export class FooterComponent extends Component {

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">©
                        2020
                        Copyright:&nbsp;
                        <a href="mailto:simon.gadola@csbe.ch?subject=Foto Share App">Simon Gadola</a>
                    </span>
                </footer>
            </div>
        )
    }
}


export default withRouter(HeaderComponent);

/// export.. default??
