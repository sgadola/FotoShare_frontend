import axios from "axios";

import {JPA_API_URL} from "../../constants";


class LocationDataService {

    retrieveAllTodos(name) {
        console.log("LocationDataService.retrieveAllTodos()");

        return axios.get(`${JPA_API_URL}/users/${name}/todos`);
    }


    retrieveTodo(name, id) {
        console.log("LocationDataService.retrieveTodo()");

        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }


    deleteTodo(name, id) {
        console.log("LocationDataService.deleteTodo()");

        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }


    updateTodo(name, id, todo) {
        console.log("LocationDataService.updateTodo()");

        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
    }


    createTodo(name, todo) {
        console.log("LocationDataService.createTodo()");

        return axios.put(`${JPA_API_URL}/users/${name}/todos`, todo);
    }
}

export default new LocationDataService();
