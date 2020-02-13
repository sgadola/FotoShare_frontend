import React, {Component} from "react";
import moment from "moment";

import AuthenticationService from "../authentication/AuthenticationService";
import TodoDataService from "../../api/LocationsApp/LocationDataService";


export class ListLocationsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: [
                {id: 1, description: 'Wunderschönes Bern',  date: new Date(), location: "Bern"},
                {id: 2, description: 'Wunderschönes London', date: new Date(), location: "London"},
                {id: 3, description: 'Wunderschönes Tokyo',  date: new Date(), location: "Tokyo"}
            ],
            message: null
        };

        this.deleteLocationClicked = this.deleteLocationClicked.bind(this);
        this.editLocationClicked = this.editLocationClicked.bind(this);
        this.addLocationClicked = this.addLocationClicked.bind(this);
        this.refreshLocations = this.refreshLocations.bind(this);
    }


    render() {
        console.log("ListLocationsComponent.render()");

        return (
            <div>
                <br/>
                <h2>Liste von Locations des Benutzers "{AuthenticationService.getLoggedInUserName()}"</h2>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Beschreibung</th>
                            <th>Datum</th>
                            <th>Ort</th>
                            <th>Bearbeiten</th>
                            <th>L&ouml;schen</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.locations.map(
                            location =>
                                <tr key={location.id}>
                                    <td>{location.description}</td>
                                    <td>{moment(location.date).format("dddd, Do MMMM YYYY")}</td>
                                    {/*DD.MM.YYYY*/}
                                    <td>{location.location.toString()}</td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => this.editLocationClicked(location.id)}>Bearbeiten</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => this.deleteLocationClicked(location.id)}>L&ouml;schen</button>
                                    </td>
                                </tr>
                        )}
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addLocationClicked}>Hinzuf&uuml;gen</button>
                    </div>
                </div>
            </div>
        );
    }


    componentDidMount() {
        console.log("ListLocationsComponent.componentDidMount()");

        this.refreshLocations();
        console.log(this.state);
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("ListLocationsComponent.shouldComponentUpdate()");

        console.log("nextProps:");
        console.log(nextProps);
        console.log("nextState:");
        console.log(nextState);

        return true;
    }


    refreshLocations() {
        console.log("ListLocationsComponent.refreshTodos()");

        let username = AuthenticationService.getLoggedInUserName();

        // Schori
        //AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, sessionStorage.getItem("authenticationToken"));

        TodoDataService.retrieveAllLocations(username).then(response => {
            console.log(response);

            this.setState({locations: response.data})

        }).catch(error => {
            console.log(error);
        });
    }


    deleteLocationClicked(id) {
        let username = AuthenticationService.getLoggedInUserName(id);

        TodoDataService.deleteLocation(username, id).then(() => {
            this.setState({message: `Location ${id} wurde erfolgreich gel&ouml;scht.`});
            this.refreshLocations();
        });

        console.log(username);
    }


    addLocationClicked() {
        this.props.history.push("/location/-1");
    }


    editLocationClicked(id) {
        console.log("updated LocationsApp with id " + id + "!");

        this.props.history.push(`/location/${id}`);
    }
}
