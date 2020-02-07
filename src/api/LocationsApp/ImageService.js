import axios from "axios"


class ImageService {

    uploadImage(image) {
        return axios.post("http://localhost:8080/upload", {
            image
        });
    }
}


export default new ImageService();
