/* globals window */

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { RootReducer } from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory({
  basename: '',
});

const persistedReducer = persistReducer({
  key: 'store',
  storage,
  whitelist: ['rServerData', 'rSession', 'rUtils'],
}, RootReducer(history));


const middlewares = [
  thunk,
  routerMiddleware(history),
];


export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export const getState = () => store.getState();

export const getHeader = () => {
  const storeData = getState();
  const { rSession } = storeData;

  return {
    "Authorization": (rSession.Success == true ? rSession.token : ""),
    "Content-Type": "application/json"
  }
}


export const persistor = persistStore(store);
