import http from '../services/http'
import $q from 'q'
import { config } from '../configs'
import { getHeader } from '../store/store'

const { API_MAP, API_URL } = config

const headerConfig = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
}

export default class UtilsData {

  static employeeLeaveBalance(param) {
    const deferred = $q.defer();
    const header = getHeader();

    http.post(API_URL + API_MAP.EMPLOYEE_LEAVE_BALANCE, param, header)
      .then(res => deferred.resolve(res))
      .catch(error => deferred.reject(error))

    return deferred.promise;
  }

  static searchSigners(param) {
    const deferred = $q.defer();
    const header = getHeader();

    http.post(API_URL + API_MAP.SEARCH_SIGNERS, param, header)
      .then(res => deferred.resolve(res))
      .catch(error => deferred.reject(error))

    return deferred.promise;
  }

}
