// store.ts

import {createWrapper, HYDRATE} from 'next-redux-wrapper';

import {createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import queryReducer from './reducers/query'

// create your reducer
const mainReducer = (state = {tick: 'init'}, action) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        case 'TICK':
            return {...state, tick: action.payload};
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    main: mainReducer,
    query: queryReducer
})

// create a makeStore function
const makeStore = (initialState, options) => {
    return createStore(rootReducer, initialState, composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    ));
  };

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});