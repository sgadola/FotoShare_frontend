import axios from "axios"
import {API_URL} from "../../constants";


class AuthenticationService {

    registerSuccessfulLoginForJwt(username, token) {
        console.log("AuthenticationService.registerSuccessfulLoginForJwt()");

        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('authenticationToken', token);	// Schori

        this.setupAxiosInterceptors(this.createJWTToken(token));
    }

    createJWTToken(token) {
        console.log("AuthenticationService.createJWTToken()");

        return "Bearer " + token;
    }

    logout() {
        sessionStorage.removeItem("authenticatedUser");
        sessionStorage.removeItem("password");
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser");

        return user !== null;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem("authenticatedUser");

        if (user === null)
            return "";
        else
            return user;
    }

    setupAxiosInterceptors(token) {
        console.info("AuthenticationService.setupAxiosInterceptors() called\n" +
            "AuthenticationService.setupAxiosInterceptors(): isUserLoggedIn() = " + this.isUserLoggedIn());

        axios.interceptors.request.use(
            (config) => {
                console.log("Axios request interceptor callback(): isUserLoggedIn() = " + this.isUserLoggedIn());

                if (this.isUserLoggedIn()) {
                    // config.headers.authorization = basicAuthHeader;
                    config.headers.authorization = token;
                    // config.headers.authorization = `Bearer ${token}`;
                }

                return config;
            }
        )
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        });
    }
}


export default new AuthenticationService();
