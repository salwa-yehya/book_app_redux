import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = ({ sr,setSr}) => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>The whole world is in your hands.</h2><br />
                <SearchForm setSr={setSr}  sr={sr} />
            </div>
        </header>
    </div>
  )
}

export default Header