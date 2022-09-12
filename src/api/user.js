import http from "../services/http"
import $q from "q";
import { config } from "../configs";
import { getHeader } from "../store/store";

const { API_MAP, API_URL } = config;

export default class UserAPI {

    static login(param) {
        const deferred = $q.defer();
debugger;
        http.post(API_URL + API_MAP.LOGIN, param)
            .then(res => deferred.resolve(res))
            .catch(error => deferred.reject(error))

        return deferred.promise;
    }

    
}
