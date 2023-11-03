import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getByUserId: (id) => axiosService.get(urls.posts.byUserId(id)),
    getByPostId: (id) => axiosService.get(urls.comments.byPostId(id))
}

export {
    postService
}