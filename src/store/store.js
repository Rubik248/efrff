// store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import dataReducer from './reducers';

export const store = createStore(dataReducer, applyMiddleware(thunk));
