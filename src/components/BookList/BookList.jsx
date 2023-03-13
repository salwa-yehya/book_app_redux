import React, { useEffect, useState } from 'react';
// import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';


const BookList = () => {
  const[Books,setBooks]=useState([]);

  useEffect(()=>{
    getBooks();

          },[])

          const getBooks =()=>{
        
            axios.get("http://localhost/REACT_REDUX/book_app_redux/back_end/books.php")
          
            .then((res)=>{
                console.log(res.data)
                setBooks(res.data)
            })
       } 


  return (
    
  

    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          {/* <h2>{resultTitle}</h2> */}
          
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <h2  style={{marginTop:'-19px'}}>All Books</h2>
            <Link to="/createBook">
                <button className='btn' style={{backgroundColor:"#FA8F8D", border:"none" , width:"150px" , height:"45px" , fontSize:"15px"}}>Add book</button>
            </Link>
          </div>
        </div>
        <br />
        <div className='booklist-content grid'>
        {(Books == []) ?
                  <></>
                  :
                  Books.map((book) =>(
                    <Book key = {book.id} Books ={book} />
                    ))}
        
                {/* <Book /> */}
                {/* // <Book key = {index} {...item} /> */}
            
        </div>
      </div>
    </section>
  )
}

export default BookList