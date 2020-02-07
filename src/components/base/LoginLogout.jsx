import React, {Component} from "react";
import AuthenticationService from "../authentication/AuthenticationService";


export class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
    }


    render() {
        return (
            <div>
                <br/>
                <h2>Anmeldung</h2>
                <div className="container">
                    {this.state.hasLoginFailed &&
                    <div className="alert alert-warning">Ung&uuml;ltige Anmeldedaten</div>}
                    {this.state.showSuccessMessage && <div>Anmeldung erfolgreich</div>}
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>
                                Benutzername: <input name="username"
                                                     type="text"
                                                     value={this.state.username}
                                                     onChange={this.handleChange}
                                                     onKeyPress={this.keyPressed}
                                                     placeholder="Bitte Benutzername eingeben"
                                                     required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Passwort: <input name="password"
                                                 type="password"
                                                 value={this.state.password}
                                                 onChange={this.handleChange}
                                                 onKeyPress={this.keyPressed}
                                                 placeholder="Bitte Passwort eingeben"
                                                 required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn btn-success" type="submit" onClick={this.loginClicked}>Anmelden
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }


    // EnterKey-Login handler
    keyPressed(event) {
        if (event.key === "Enter")
            this.loginClicked();
    }


    handleChange(event) {
        // console.log(this.state);

        this.setState({
            [event.target.name]: event.target.value
        });
    }


    loginClicked() {
        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token);
                this.props.history.push(`/welcome/${this.state.username}`)
            })
            .catch(() => {
                this.setState({showSuccessMessage: false});
                this.setState({hasLoginFailed: true})
            })
    }
}


export class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h3>Sie sind nun abgemeldet</h3>
                <div className="container">
                    Vielen Dank dass Sie unsere Foto Share App verwendet haben.<br/>
                </div>
            </div>
        )
    }
}
