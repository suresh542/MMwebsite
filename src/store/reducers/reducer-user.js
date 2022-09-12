import ACTIONS from "../actions-names/index";

const { USER_ACTIONS } = ACTIONS;

export default (state = {}, action) => {
    switch (action.type) {
        case USER_ACTIONS.UPDATE:
            if (action.key === "imageUpload")
                return {
                    ...state,
                    imageUpload: {
                        ...state.imageUpload,
                        ...action.data.imageUpload
                    }
                }
            else if (action.key) {
                return {
                    ...state,
                    [action.key]: action.data
                }
            }
            return {
                ...action.data
            }
        case USER_ACTIONS.LOGOUT:
            return state;

        case USER_ACTIONS.CLEAR:
            return {};

        default:
            return state;
    }
}