
import React from 'react';
import { Link } from 'react-router-dom';

const Book2 = (props) => {
    return (
    
        <div className='book-item-info text-center'>
            <div className='book-item-img'>
          <img src = {require(`../../images/${props.Books.image}`)} alt = "cover" />
        </div>
        <br />
          <Link to = {`/book/${props.Books.id}`} >
            <div className='book-item-info-item title fw-7 fs-18'>
              <span> {props.Books.title}</span>
            </div>
          </Link>
  
        
        </div>
    
    )
  }
  
  export default Book2