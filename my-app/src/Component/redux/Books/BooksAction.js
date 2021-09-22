import  {Buy_Books}   from "./BooksType";

export  const  buy_books = (number)  =>  {

       return{
               type: Buy_Books ,
               payload: number
             }
}