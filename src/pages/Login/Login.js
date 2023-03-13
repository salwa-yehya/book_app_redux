import React , {useState}from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from "../../images/book-1.png";

import {useSelector,useDispatch } from 'react-redux';
import {login} from "../../redux/action/index";
 import "./login.css";
export default function Login() {

  const dispatch=useDispatch();
  const nanigate = useNavigate();
  const admin=useSelector(state=>state.login.admin);
  const error=useSelector(state=>state.login.error);

     
      if(admin.length !== 0){
        console.log(true);
          nanigate('/book');
      }


  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
const LoginFun=(e)=>{
  e.preventDefault();
  dispatch(login(email,password));
}

  return (
    <div className="holder">
      <header className="header">
        {/* <Navbar /> */}
        
          <div className="body" >
            <form id="form" className='mt-4'>
              <h2 id="title-login">Sign in</h2>
              <p className="para-login">Welcome Our favorite reader.<br></br>Nice to see you again</p>

              <div>
                <input id="input" type="text" placeholder="Your email" onChange={(e)=>setEmail(e.target.value)} />
           

              </div>
              <div >
                <input
                  id="input"
                  type="password"
                  placeholder="Enter password"
                  onChange={(e)=>setPassword(e.target.value)}/>
               <p id="p1" />
              </div>
              <div id='errorr'>
                  <span>{error}</span>
              </div>
              <button id="inputButtonLogin" type="button"
                defaultValue="login"
                onClick={(e)=> LoginFun(e)}>login
               </button>
                
               <span className="dark-color d-inline-block line-height-2 para2-login">Don't Have Account ?<Link to={'/register'}> register now</Link></span>

            </form>
            <div>
            <img src={Img} style={{marginLeft:'4rem'}}  alt='boookhub' className='img'/>

            </div>
          </div>

      </header>
    </div>
  );
}
