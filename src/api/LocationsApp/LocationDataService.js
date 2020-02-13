import axios from "axios";

import {API_URL} from "../../constants";


class LocationDataService {

    retrieveAllLocations() {
        console.log("LocationDataService.retrieveAllLocations()");

        return axios.get(`${API_URL}/locations`);
    }


    retrieveAllLocationsByUsername(username) {
        console.log("LocationDataService.retrieveAllLocations()");

        return axios.get(`${API_URL}/locations/${username}`);
    }


    retrieveLocation(id) {
        console.log("LocationDataService.retrieveLocation()");

        return axios.get(`${API_URL}/location/${id}`);
    }


    deleteLocation(id) {
        console.log("LocationDataService.deleteLocation()");

        return axios.delete(`${API_URL}/location/${id}`);
    }


    updateLocation(id, location) {
        console.log("LocationDataService.updateLocation()");

        return axios.put(`${API_URL}/location/${id}`, location);
    }


    createLocation(location) {
        console.log("LocationDataService.createLocation()");

        return axios.put(`${API_URL}/location/new`, location);
    }
}


export default new LocationDataService();
