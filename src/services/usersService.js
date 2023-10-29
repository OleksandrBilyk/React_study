import {axiosService} from "./axiosService";
import {urls} from "../urls/urls";

const usersService = {
    getAll: () => axiosService.get(urls.url_users),
    creating: (data) => axiosService.post(urls.url_users, data),

}

export {usersService}