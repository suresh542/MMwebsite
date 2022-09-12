import ACTIONS from '../actions-names';

const { SESSION_ACTIONS } = ACTIONS;

export function ActionSessionStart(res) {
    let data = {};

    data = res;
    
    return {
        type: SESSION_ACTIONS.START,
        data
    }
}

export function ActionUpdateSession(key, data) {
    return {
        type: SESSION_ACTIONS.UPDATE,
        key,
        data
    }
}

export function ActionSessionClear() {

    return {
        type: SESSION_ACTIONS.CLEAR,
    }
}