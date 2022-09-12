import _ from "lodash";
import { notification } from 'antd'
import UtilsData from '../../api/utils-data'
import ACTIONS from '../actions-names/index'
import { ActionLoadingUpdate } from './actions-loading'
const { UTILS_ACTIONS } = ACTIONS

export const ActionOpenNotification = (type, message, description) => {
  notification[type]({
    message,
    description
  })
}

export function ActionUtilsData(ns, payload) {
  const data = {}
  data[ns] = payload
  return {
    type: UTILS_ACTIONS.UPDATE_DATA,
    data
  }
}

export function ActionClearUtils() {
  return {
    type: UTILS_ACTIONS.CLEAR,
  }
}

export function ActionGetEmployeeLeaveBalance(param) {
  return dispatch => {
    dispatch(ActionLoadingUpdate('employeeLeaveBalance', true))

    UtilsData.employeeLeaveBalance(param)
      .then(res => {
        dispatch(ActionUtilsData('employeeLeaveBalance', { ...res.balance[0], ...res.Availed[0] }))
      })
      .catch(err => console.log(err))
      .finally(() => dispatch(ActionLoadingUpdate('employeeLeaveBalance', false)))
  }
}

export function ActionGetSearchSigners(param) {
  return dispatch => {
    dispatch(ActionLoadingUpdate('searchSigners', true))

    UtilsData.searchSigners(param)
      .then(res => {
        let searchSigners = []
        _.map(res.Signers, obj => searchSigners.push({ ...obj, "value": obj.Id, "label": obj.Name }))
        dispatch(ActionUtilsData('searchSigners', searchSigners))
      })
      .catch(err => console.log(err))
      .finally(() => dispatch(ActionLoadingUpdate('searchSigners', false)))
  }
}