/* eslint-disable indent */
import { SERVER_ACTIONS } from "../actions-names/server";

export default (state = {}, action) => {
  switch (action.type) {
    case SERVER_ACTIONS.UPDATE_DATA: {
      if (action.key) {
        return {
          ...state,
          [action.key]: action.data,
        };
      }

      return {
        ...state,
        ...action.data,
      };
    }

    case SERVER_ACTIONS.CLEAR: {
      return {}
    }

    default:
      return state;
  }
};
