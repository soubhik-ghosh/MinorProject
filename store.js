
/*
import { combineReducers } from 'redux';

import { createStore, applyMiddleware } from 'redux';
 
import thunk from 'redux-thunk'; 

import { composeWithDevTools } from '@redux-devtools/extension'; 

import { getAllPizzasReducers } from './reducers/pizzaReducers';


const finalReducer = combineReducers({
  getAllPizzasReducer : getAllPizzasReducers
})
const initialState = {} 

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk))


const store = createStore(finalReducer , initialState , composeEnhancers());


export default store;






import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

// Import your reducers
import { getAllPizzasReducers } from './reducers/pizzaReducers';

// Combine reducers
const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducers, // Reducer key matches the imported reducer
});

// Initial state
const initialState = {};

// Apply middleware and Redux DevTools
const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

// Create the Redux store
const store = createStore(finalReducer, initialState, composeEnhancers);

export default store;
*/


/*
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducers } from './reducers/pizzaReducers';


const finalReducer = combineReducers({
  getAllPizzasReducer : getAllPizzasReducers
})
const initialState = {} 

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk))


const store = createStore(finalReducer , initialState , composeEnhancers());
export default store;
*/

/*

import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; 
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducers } from './reducers/pizzaReducers';


const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducers, 
});


const initialState = {}; 

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));


const store = createStore(finalReducer, initialState, composeEnhancers);

export default store;
*/

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'; // Correct import
import rootReducer from './reducers'; // Combine all reducers here

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;


