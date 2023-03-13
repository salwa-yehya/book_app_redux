import React, { useEffect ,useState}  from 'react';
import Header from '../../components/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useOutletContext } from "react-router-dom";
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const admin=useSelector(state=>state.login.admin);

  const [sr,setSr]=useState('')
  const[search,setSearch]=useState('');


  useEffect(()=>{

    checkLogin();
  // getBooks();
  console.log(sr);
  test();

  },[sr]);

const test = () =>{
  console.log(sr);
  setSearch(sr)
}

  const checkLogin = () =>{
    if (admin === ''){

      navigate('/login')

    }
  }
  return (
    <main>
     <Header setSr={setSr}  sr={sr} />
     <Outlet  context={[search]}/>
    </main>
  )
}
export default Home