import axios from "axios";

import {API_URL} from "../../constants";


class LocationDataService {

    retrieveAllUsers() {
        console.log("LocationDataService.retrieveAllLocations()");

        return axios.get(`${API_URL}/users`);
    }


    retrieveUser(id) {
        console.log("LocationDataService.retrieveLocation()");

        return axios.get(`${API_URL}/user/${id}`);
    }


    deleteUser(id) {
        console.log("LocationDataService.deleteLocation()");

        return axios.delete(`${API_URL}/user/${id}`);
    }


    updateUser(id, location) {
        console.log("LocationDataService.updateLocation()");

        return axios.put(`${API_URL}/user/${id}`, location);
    }


    createUser(location) {
        console.log("LocationDataService.createLocation()");

        return axios.put(`${API_URL}/user/new`, location);
    }
}


export default new LocationDataService();
