import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
// import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = ({ sr,setSr}) => {

  const handelChange=(e)=>{
    setSr(e.target.value)
 }
  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form'>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type = "text" className='form-control' placeholder='Search Here ...'  onChange={handelChange}  />
              <button type = "submit" className='flex flex-c' >
                <FaSearch className='icon' size = {32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm