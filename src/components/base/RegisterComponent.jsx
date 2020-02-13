import React, {Component} from "react";

// import AuthenticationService from "../authentication/AuthenticationService";


export class RegisterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            password2: '',
            hasRegistrationFailed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.registerClicked = this.registerClicked.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
    }


    render() {
        return (
            <div>
                <br/>
                <h2>Registrierung</h2>
                <div className="container">
                    {this.state.hasRegistrationFailed &&
                    <div className="alert alert-warning">Ung&uuml;ltige Registrierungsdaten</div>}
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
                                Passwort bestätigen: <input name=""
                                                 type="password"
                                                 value={this.state.password2}
                                                 onChange={this.handleChange}
                                                 onKeyPress={this.keyPressed}
                                                 placeholder="Bitte Passwort bestätigen"
                                                 required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn btn-success"
                                        type="submit"
                                        onClick={this.registerClicked}>Registrieren
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
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    registerClicked() {
        // Registration code goes here


        // AuthenticationService
        //     .executeJwtAuthenticationService(this.state.username, this.state.password)
        //     .then((response) => {
        //         AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token);
        //         this.props.history.push(`/welcome/${this.state.username}`)
        //     })
        //     .catch(() => {
        //         this.setState({hasRegistrationFailed: true})
        //     })
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
