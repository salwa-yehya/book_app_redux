import React, { useEffect, useState } from 'react';
import './profile.css';
import Navbar from "../../components/Navbar/Navbar";
import axios from 'axios';
import Book2 from '../../components/BookList/Bookk';


export default function Profile() {

    // const current_ID = JSON.parse(localStorage.getItem('id'));
    const current_ID = 1;
    // const user_email = localStorage.getItem('email');

    const [dataUsers,setDataUsers] = useState([]);

    useEffect(()=>{
        getDataUsers();
       
    },[]);
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
      // لعرض  بيانات المستخدم في الموقع
  const getDataUsers = () => {

    axios.get(`http://localhost:80/REACT_REDUX/book_app_redux/back_end/user.php/users/${current_ID}`)
    .then((respone)=>{
      setDataUsers(respone.data)
        console.log(respone.data);
    })
}

  return (
    <>
    {dataUsers.map((users,index)=>{

return <div key={index}>
<Navbar />

<div className='parent'>
<div className="wrapper">
        <div className="left">
          <img src={require(`../../images/${users.image}`)} alt="user" width={100} />
          <h4 style={{color:"black"}}> {users.name}</h4>
          {/* <p>FULL STACK DEVELOPER</p> */}
        </div>
        <div className="right">
          <div className="info">
            <h3>Information</h3>
            <div className="info_data">
              <div className="data">
                <h4>Email</h4>
                <p>{users.email}</p>
              </div>
              <div className="data" style={{paddingRight:"130px"}}>
                <h4>Phone</h4>
                <p>{users.phone}</p>
              </div>
            </div>
          </div>
          <div className="social_media">
            <ul>
              <li><a href={`/profile/${users.id}/edit`} >Edit Profile</a></li>
          
            </ul>
          </div>
          <br />
          <div className="projects">
            <h3>Books</h3>
            <h4>Recent Book Added :</h4>
            <br />
            <div className="projects_data">
              <div className="data">
                
                 <div className='booklist-content1 '>
                  {(Books == []) ?
                  <></>
                  :
                  Books.map((book) =>(
                    <Book2  key = {book.id} Books ={book} />
                    ))}
                    </div>
               
                {/* <div className='book-item-info text-center'>
                  <Link to = {`/book/${props.Books.id}`} >
                    <div className='book-item-info-item title fw-7 fs-18'>
                      <span> {props.Books.title}</span>
                    </div>
                  </Link>
              </div>
              </div> */}
              </div>
           
            </div>
          </div>
        
        </div>
      </div>
      </div>
      </div>
    
        })}
    </>
  )
}
