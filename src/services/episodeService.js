import {axiosService} from "./axiosService";
import {urls} from "../constants";

const episodeService = {
    geAll: (page='1') => axiosService.get(urls.episode, {params:{page}}),
}

export {
    episodeService
}