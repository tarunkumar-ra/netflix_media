import React from 'react';

import { connect }  from "react-redux";

import  { buy_books }  from "./redux/Books/BooksAction";

const  BooksContainer = ( props ) => {

        return (
                <div>
                <h1>Number of Books: { props.noofBooks }</h1>    
                <button onClick={ props.buy_books }>button</button>    
                </div>
               );        
}

const  mapStateToProps =  (state)  =>  {

       return { 
               noofBooks:state.numberOfBooks
              }       

} 

const  mapDispatchToProps = ( dispatch ) => {

     return { buy_books: function(){
                                    dispatch(buy_books());
                                   }
            }

}
export default  connect( mapStateToProps , mapDispatchToProps ) ( BooksContainer );