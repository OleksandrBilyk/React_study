import {axiosService} from "./axiosService";
import {urls} from "../urls/urls";

const commentsService = {
    getAll: () => axiosService.get(urls.url_comments),
    creating: (data) => axiosService.post(urls.url_comments, data),
}

export {commentsService}