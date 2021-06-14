import axios from"axios";

export default class AuthService {
    getUsers(){
        return axios.get("http://localhost:8080/api/auth/alluser")
    }
}