import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { reducers } from "./combineReducers/index.jsx";

const composeEnhancer =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

// const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
