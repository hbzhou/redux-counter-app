import rootReducer from './reducer/index'
import {createStore} from "redux";
import {applyMiddleware} from "redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk"

export const store = createStore(rootReducer, {}, applyMiddleware(logger,thunk));