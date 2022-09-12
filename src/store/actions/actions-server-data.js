import moment from 'moment'
import ROUTES from '../../configs/routes';
import _, { sortBy, split } from "lodash";
import ServerData from "../../api/server";
import { ActionLoadingUpdate } from './actions-loading'
import { SERVER_ACTIONS } from "../actions-names/server";
import { ActionOpenNotification } from "./actions-utils-data";
import { UtilsHelper } from "../../utils/utils-helper";
import { ActionRouteNavigate } from './actions-route';
import { Router } from 'react-router';

export function ActionServerData(ns, payload) {
    const data = {}
    data[ns] = payload
    return {
        type: SERVER_ACTIONS.UPDATE_DATA,
        data
    }
}

export function ActionClearServer() {
    return {
        type: SERVER_ACTIONS.CLEAR,
    }
}

export function ActionClearServerWithKey(key) {
    return dispatch => {
        dispatch(ActionServerData(key, undefined))
    }
}

export function ActionContactUs(param) {
    return dispatch => {
        dispatch(ActionLoadingUpdate('ContactUs', true))

        ServerData.ContactUs(param)
            .then(res => {
                debugger;
                if (res.success) {
                    debugger;
                    ActionOpenNotification('success', 'Successfully Submitted', res.Message)
                    dispatch(ActionServerData('ContactUs', res))
                }
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(ActionLoadingUpdate('ContactUs', false)))
    }
}

export function ActionGetCountry() {
    return dispatch => {
        dispatch(ActionLoadingUpdate('country', true))

        ServerData.GetCountry()
            .then(res => {
                debugger;
                if (res.success) {
                    dispatch(ActionServerData('country', res))
                }
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(ActionLoadingUpdate('country', false)))
    }
}

export function ActionNavigation(param) {
    return dispatch => {
        debugger;
        dispatch(ActionServerData('navigations', param))   
        dispatch(ActionRouteNavigate(param.navigate));     
    }
}

export function ActinRestaurantOTPGenerator(param) {
    return dispatch => {
        dispatch(ActionLoadingUpdate('RestaurantOTPGenerator', true))
              ServerData.RestaurantOTPGenerator(param)
            .then(res => {
                debugger;
                if (res.success) {
                   
                    dispatch(ActionServerData('RestaurantOTPGenerator', res))
                    //ActionOpenNotification('success', 'Successfully Submitted', res.Message)
                  
                }
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(ActionLoadingUpdate('RestaurantOTPGenerator', false)))
    }
}

export function ActinRestaurantOTPVerification(param) {
    return dispatch => {
         dispatch(ActionLoadingUpdate('RestaurantOTPVerification', true))

        ServerData.RestaurantOTPVerification(param)
            .then(res => {
                debugger;
                if (res.success) {
                    debugger;
                    ActionOpenNotification('success', 'Successfully Submitted', res.Message)
                    dispatch(ActionServerData('RestaurantOTPVerification', res))
                }
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(ActionLoadingUpdate('RestaurantOTPVerification', false)))
    }
}



export function ActionAddAmbassador(param) {
    return dispatch => {
        dispatch(ActionLoadingUpdate('ambassador', true))
        ServerData.addAmbassador(param)
            .then(res => {
                if (res.success) {
                    ActionOpenNotification('success', 'Successfully Submitted', res.Message)
                    dispatch(ActionServerData('ambassador', res))
                }
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(ActionLoadingUpdate('ambassador', false)))
    }
}
export function ActionAddRestaurantPage(params) {
    debugger;
    return dispatch => {
        dispatch(ActionLoadingUpdate('addRestaurant', true))
        ServerData.AddRestaurantPage(params)
            .then(res => {
                debugger;
                if (res.success === true) {
                    debugger;
                    dispatch(ActionServerData('addRestaurant', res.data))                   
                    ActionOpenNotification('success', 'Successfully Submitted', res.Message)
                } else {
                    ActionOpenNotification('info', 'failed', res.Message)
                    dispatch(ActionServerData('addRestaurant', res))
                }
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(ActionLoadingUpdate('addRestaurant', false)))
    }
}
export function actionGetCuisineList() {
    return dispatch => {
        debugger;
        dispatch(ActionLoadingUpdate('CuisineList', true))

        ServerData.GetCuisineList()
            .then(res => {
                debugger;
                if (res.success === true) {
                    dispatch(ActionServerData('CuisineList', res.data))
                }
                else {
                    ActionOpenNotification('info', 'failed', res.message)
                    dispatch(ActionServerData('CuisineList', res))
                }

            })
            .catch(err => console.log(err))
            .finally(() => dispatch(ActionLoadingUpdate('CuisineList', false)))
    }
}


export function actionGetRestaurantOperator() {
    return dispatch => {
        debugger;
        dispatch(ActionLoadingUpdate('restaurantOperator', true))

        ServerData.GetRestaurantOperator()
            .then(res => {
                debugger;
                if (res.success === true) {
                    dispatch(ActionServerData('restaurantOperator', res.data))
                }
                else {
                    ActionOpenNotification('info', 'failed', res.message)
                    dispatch(ActionServerData('restaurantOperator', res))
                }

            })
            .catch(err => console.log(err))
            .finally(() => dispatch(ActionLoadingUpdate('restaurantOperator', false)))
    }
}

export function ActionAddRestaurantType(param) {
    debugger;
    return dispatch => {
        dispatch(ActionLoadingUpdate('editCuisine', true))
        ServerData.AddRestaurantType(param)
            .then(res => {
                debugger;
                if (res.success === true) {
                    dispatch(ActionServerData('editCuisine', res.data))

                } else {
                    ActionOpenNotification('info', 'failed', res.Message)
                    dispatch(ActionServerData('editCuisine', res))
                }
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(ActionLoadingUpdate('editCuisine', false)))
    }
}



