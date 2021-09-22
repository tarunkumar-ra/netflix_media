import  BooksReducer  from "./redux/Books/BooksReducer";

import logger from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';

const  { createStore , applyMiddleware } =  require('redux');

const  store =  createStore( BooksReducer , composeWithDevTools ( applyMiddleware(logger) ) );

export default  store;