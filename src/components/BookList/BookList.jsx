import React, { useEffect, useState } from 'react';
// import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";
import { Link, useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';


const BookList = () => {
  const[Books,setBooks]=useState([]);
  const admin=useSelector(state=>state.login.admin);
  const [search] = useOutletContext();



 

  useEffect(()=>{
    getBooks();
    console.log(admin);
    console.log(search);
  },[search])

      const getBooks =()=>{
    
        axios.get("http://localhost/REACT_REDUX/book_app_redux/back_end/books.php")
      
        .then((res)=>{
            console.log(res.data)
            setBooks(res.data)
        })
       } 

  // const booksWithCovers = books.map((singleBook) => {
  //   return {
  //     ...singleBook,
  //     id: (singleBook.id).replace("/works/", ""),
  //     cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
  //   }
  // });

  // if(loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          {/* <h2>{resultTitle}</h2> */}
          
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <h2  style={{marginTop:'-19px'}}>All Books</h2>




              {admin !== '' ?

                  <Link to="/createBook">
                      <button className='btn' style={{width:'130px' , height:"40px" , backgroundColor:"#EC8D95" , border:"none" , fontSize:"15px"}}>Add book</button>
                  </Link> 
                  : " "
}
              

          </div>
          <br />
        </div>
        <div className='booklist-content grid'>
        {(Books === []) ?
                  <></>
                  :
                  Books.filter(b=>b.title.toLowerCase().includes(search)).map((book) =>(
                    <Book   key = {book.id} Books ={book} />
                    ))}
        
                {/* <Book /> */}
                {/* // <Book key = {index} {...item} /> */}
            
        </div>
      </div>
    </section>
  )
}

export default BookList