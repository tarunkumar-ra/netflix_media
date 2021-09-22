import { Buy_Books }  from "./BooksType";

const initalState  = {

                      numberOfBooks:10,
                      numberOfPens :10
}

const  BooksReducer = ( state = initalState , action ) => {

         switch(action.type){
                              case Buy_Books : return { ...state , numberOfBooks : state.numberOfBooks - action.payload };
                              default : return state;
                            }
}
export  default  BooksReducer;