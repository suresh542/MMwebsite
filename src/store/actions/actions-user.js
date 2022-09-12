import UserAPI from '../../api/user'
import ROUTES from '../../configs/routes';
import { ActionOpenNotification, ActionClearUtils } from "./actions-utils-data";
import { USER_ACTIONS } from '../actions-names/users'
import { ActionLoadingUpdate } from './actions-loading'
import { ActionRouteNavigate } from './actions-route';
import { ActionSessionStart, ActionSessionClear } from "./actions-session";
import { localStorageApi } from '../../api/storage';
import {
 ActionClearServer, 
} from './actions-server-data';
import { UtilsHelper } from '../../utils/utils-helper';
import moment from 'moment'

export function ActionUserUpdate(key, data) {
  return {
    type: USER_ACTIONS.UPDATE,
    key,
    data
  }
}

export function ActionClearUsersWithKey(key) {
  return dispatch => {
    dispatch(ActionUserUpdate(key, {}))
  }
}

export function ActionClearUser() {
  return {
    type: USER_ACTIONS.CLEAR,
  }
}





export function ActionLogout() {
  return dispatch => {
    dispatch(ActionSessionClear())
    dispatch(ActionClearServer())
    dispatch(ActionClearUser())
    dispatch(ActionClearUtils())
    localStorageApi.clear();
    dispatch(ActionRouteNavigate(ROUTES.LOGIN))
  }
}



