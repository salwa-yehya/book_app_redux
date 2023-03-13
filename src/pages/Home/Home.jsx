import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  const admin=useSelector(state=>state.login.admin);


  useEffect(()=>{

    checkLogin();

  },[]);

  const checkLogin = () =>{
    if (admin === ''){

      navigate('/login')

    }
  }
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}
export default Home