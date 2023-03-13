import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {id} = useParams();
  const admin=useSelector(state=>state.login.admin);

  // const [loading, setLoading] = useState(false);
  const [book, setBook] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    getDataBook();


   
    
} , [])

const getDataBook = () => {

  axios.get(`http://localhost:80/REACT_REDUX/book_app_redux/back_end/getDataBooks.php/${id}`)
  .then(response => {
      console.log(response.data)
      setBook(response.data);
  })
}

const deleteBook = (id) => {
  axios.delete(`http://localhost:80/REACT_REDUX/book_app_redux/back_end/books.php/${id}/delete`).then((response)=>{
      console.log(response.data);
      navigate('/book')


  })
}


  return (
    <>
    {book.map((book,index)=>{
      return(
        <div key={index}>
      
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {require(`../../images/${book.image}`)} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.title}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Auther: </span>
              <span className='text-italic'>{book?.auther}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Description: </span>
              <span className='text-italic'>{book?.description}</span>
            </div>
            {book.user_id === admin ?
            <div className='book-details-item' style={{display:"flex" , gap:"5px"}}>
              <div>

                  <span className='fw-6'>
                    <button variant="danger" className='btn btn-success'><Link to={`/editBook/${id}`}> </Link>edit</button>
                  </span>

              </div>
              <div>
                    <span className='fw-6'> 
                        <Link>
                            <button variant="danger" className='btn btn-danger' onClick={()=>deleteBook(id)}>Delete</button>
                        </Link> 
                      </span>

              </div>
            </div>
              : ""  }
          </div>
        </div>
      </div>
    </section>
    </div>

)
})}
</>
  )
}

export default BookDetails