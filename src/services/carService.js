import {axiosService} from "./axiosService";
import {urls} from "../constant/urls";

const carService = {
    getAll: () => axiosService.get(urls.cars.base),
    creating: (data) => axiosService.post(urls.cars.base, data),
    updateById: (id, data) => axiosService.put(urls.cars.byId(id), data),
    deleteById: (id) => axiosService.delete(urls.cars.byId(id))
}

export {
    carService
}