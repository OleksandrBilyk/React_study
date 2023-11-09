import {axiosService} from "./axiosService";
import {urls} from "../constants";

const characterService = {
    geAll: (page='1') => axiosService.get(urls.character, {params:{page}}),
}

export {
    characterService
}