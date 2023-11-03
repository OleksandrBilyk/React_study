import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => axiosService.get(urls.users),
    getByUserId: (id) => axiosService.get(urls.users.byUserId(id))
}

export {
    userService
}