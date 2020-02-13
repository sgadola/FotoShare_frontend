import React, {Component} from "react";
import moment from "moment";
import {ErrorMessage, Field, Form, Formik} from "formik";

import TodoDataService from "../../api/LocationsApp/LocationDataService";
import AuthenticationService from "../authentication/AuthenticationService";


export default class LocationComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            description: "",
            date: moment(new Date()).format("YYYY-MM-DD"),
            location: "",
            imageFile: null
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }


    componentDidMount() {
        if (this.state.id === -1)
            return;

        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveLocation(username, this.state.id)
            .then(response => {
                this.setState({
                    description: response.data.description,
                    date: moment(response.data.date).format("YYYY-MM-DD")
                });

                console.log("LocationComponent.componentDidMount(): date: " + this.state.date);
            })
            .catch(() => console.log("retrieve Todo failed !!!!!"));
    }


    onSubmit(values) {
        console.log(values);

        let username = AuthenticationService.getLoggedInUserName();

        let location = {
            id: this.state.id,
            description: values.description,
            date: values.date
        };

        if (this.state.id === -1)
            TodoDataService.createLocation(username, location)
                .then(() => this.props.history.push("/locations"));
        else
            TodoDataService.updateLocation(username, this.state.id, location)
                .then(() => this.props.history.push("/locations"));
    }


    validate(values) {
        console.log(values);

        let errors = {};

        if (!values.description)
            errors.description = "Enter a description";
        else if (values.description.length < 5)
            errors.description = "Enter at least 5 characters in Description";

        if (!moment(values.date).isValid())
            errors.date = "Enter a valid Target Date";

        return errors;
    }


    onChange(event) {
        // Enter code here :3
    }


    render() {

        let {description, date} = this.state;
        let username = AuthenticationService.getLoggedInUserName();

        // console.log("date: " + date);

        return (
            <div>
                <br/>
                <h2>Location</h2>
                <hr/>
                <div className="container">
                    <Formik initialValues={{
                        description,
                        date
                    }}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            enableReinitialize={true}>
                        {
                            () => (
                                <Form>
                                    {console.log("LocationComponent.render(): date: " + date)}
                                    <ErrorMessage className="alert alert-warning" name="description" component="div"/>
                                    <ErrorMessage className="alert alert-warning" name="date" component="div"/>
                                    <fieldset className="form-group">
                                        <label>Beschreibung</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Bild auswählen</label>
                                        <Field className="form-control" type="file" name="imageFile"
                                               onChange={this.onChange}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Datum</label>
                                        <Field className="form-control" type="date" name="date"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Benutzer</label>
                                        <Field className="form-control" type="text" name="user" value={username} disabled/>
                                    </fieldset>
                                    <br/>
                                    <button className="btn btn-success" type="submit">Speichern</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}
