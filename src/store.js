import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducers } from './reducers/pizzaReducers';


const finalReducer = combineReducers({
  getAllPizzasReducer : getAllPizzasReducers
})
const initialState = {} 

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk))


const store = createStore(finalReducer , initialState , composeEnhancers());
export default store;
