/* eslint-disable prefer-destructuring */
import ROUTES from './routes';
import API_MAP from './url-api';

export const API_URL = 'http://44.201.160.205:3052/api/'; //44.201.160.205

export const API_SETTINGS = {
  API_URL,
};

export const config = {
  ROUTES,
  API_SETTINGS,
  API_MAP,
  API_URL,
};
//UCB env 

// export const ROLES = {  
//   MANAGER: 1,
//   HR: 2,
//   EMPLOYEE: 3,
//   SECURITY: 4,
//   ADMIN: 5,
// }

 //VMpksha environment
 export const ROLES =
 {  
  // MANAGER: 1,
  // HR: 4,
  // EMPLOYEE: 6,
  // SECURITY: 25,
  ADMIN: 28, 
}   

export default function ConfigStorage() {
  return config;
}
