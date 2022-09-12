import http from '../services/http'
import $q from 'q'
import { config } from '../configs'
import { getHeader } from '../store/store';
import { param } from 'jquery';

const { API_MAP, API_URL } = config

export default class ServerData {

  
    static GetCountry(param) {
        const deferred = $q.defer();
        http.post(API_URL + API_MAP.COUNTRY, param)
            .then(res => deferred.resolve(res))
            .catch(error => deferred.reject(error))

        return deferred.promise;
    }

    static ContactUs(param) {
        const deferred = $q.defer();
debugger;
        http.post(API_URL + API_MAP.SUBSCRIBE, param)
            .then(res => deferred.resolve(res))
            .catch(error => deferred.reject(error))

        return deferred.promise;
    }

    static RestaurantOTPGenerator(param) {
        const deferred = $q.defer();
        debugger;
        http.post(API_URL + API_MAP.RESTAURANTOTPGENERATOR, param)
            .then(res => deferred.resolve(res))
            .catch(error => deferred.reject(error))

        return deferred.promise;
    }
    
    static RestaurantOTPVerification(param) {
        const deferred = $q.defer();
        debugger;
        http.post(API_URL + API_MAP.RESTAURANTOTPVERIFICATION, param)
            .then(res => deferred.resolve(res))
            .catch(error => deferred.reject(error))

        return deferred.promise;
    }


    

    static addAmbassador(param) {
        const deferred = $q.defer();
        http.post(API_URL + API_MAP.BRANDAMBASSADOR, param)
            .then(res => deferred.resolve(res))
            .catch(error => deferred.reject(error))

        return deferred.promise;
    }
    static AddRestaurantPage(param) {
        debugger;
        const deferred = $q.defer();
        const header = getHeader();
        http.post(API_URL + API_MAP.CREATERESTAURANT, param, header)
            .then(res => deferred.resolve(res))
            .catch(error => deferred.reject(error))

        return deferred.promise;
    }

    static GetCuisineList() {
        debugger;
        const deferred = $q.defer();
        const header = getHeader();

        http.get(API_URL + API_MAP.CUISINELIST, header)
            .then(res => deferred.resolve(res))
            .catch(error => deferred.reject(error))

        return deferred.promise;
    }

    static GetRestaurantOperator() {
        debugger;
        const deferred = $q.defer();
        const header = getHeader();

        http.get(API_URL + API_MAP.RESTAURANTOPERATOR, header)
            .then(res => deferred.resolve(res))
            .catch(error => deferred.reject(error))

        return deferred.promise;
    }
    static AddRestaurantType(param) {
        debugger;
        const deferred = $q.defer();
        const header = getHeader();
        http.post(API_URL + API_MAP.EDITCUISINE, param, header)
            .then(res => deferred.resolve(res))
            .catch(error => deferred.reject(error))

        return deferred.promise;
    }
    

       
}
