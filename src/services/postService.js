import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getByPostId: (postId) => axiosService.get(urls.byPostId(postId))
}

export {postService}