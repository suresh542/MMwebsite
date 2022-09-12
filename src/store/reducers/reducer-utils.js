import { UTILS_ACTIONS } from "../actions-names/utils";

export default function (state = {}, action) {

    switch (action.type) {
        case UTILS_ACTIONS.UPDATE_DATA:
            return {
                ...state,
                ...action.data
            }

        case UTILS_ACTIONS.CLEAR: {
            return {}
        }

        default:
            return state;
    }
}