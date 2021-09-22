import React from 'react';

import  store  from "./Component/store";

import  { Provider }  from  "react-redux"; 

import  BooksContainer from './Component/BooksContainer';

import HooksBookContainer  from "./Component/HooksBooksContainer";

const  App = ( props ) => {

        return (
                <Provider store={ store }>
                <BooksContainer/>
                <HooksBookContainer/>
                </Provider>
               );        
}
export default  App;