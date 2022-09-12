import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import rUser from './reducer-user';
import rUtils from "./reducer-utils";
import rLoading from './reducer-loading';
import rSession from "./reducer-session";
import rServerData from './reducer-server-data';

export const RootReducer = history => (
  combineReducers({
    router: connectRouter(history),
    rServerData,
    rLoading,
    rSession,
    rUser,
    rUtils
  })
);
