import  React , { useState } from "react";

import { useDispatch , useSelector }  from "react-redux";

import { buy_books }  from "./redux/Books/BooksAction";

const  HooksBookContainer =  ()  =>  {

const  no_of_books = useSelector( state => state.numberOfBooks ); 

const  dispatch = useDispatch();

const  [ number , setNumber ] = useState('');

const handlechange = (text) => {

       setNumber(text);
       dispatch(buy_books(text));
}
       return(   
              <div>
              <h1>HooksBookContainer</h1>
              <h1>Number of Books : { no_of_books }</h1>
              <input  type="text" value={ number } onChange={ (e) => handlechange(e.target.value) } />
              </div>
             );
}
export default  HooksBookContainer;