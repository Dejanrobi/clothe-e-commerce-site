import React from 'react'
import { BsChevronDown, BsPerson } from 'react-icons/bs';
import { IoSearchSharp } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiShoppingCart, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';


// Importing CSS
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="images/en.png" alt="Logo" />
            <FiChevronDown/>
          </div>

          <div className="item">
            <span>USD</span>
            <FiChevronDown/>
          </div>

          <div className="item">
            <Link className="link" to="/products/women">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/men">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/children">Children</Link>
          </div>
          
        </div>

        <div className="center">
           
              <Link className="link" to="/">LAMASTORE</Link>
            
        </div>

        <div className="right">
            <div className="item">
              <Link className="link" to="/">Homepage</Link>
            </div>
            <div className="item">
              <Link className="link" to="/">About</Link>
            </div>
            <div className="item">
              <Link className="link" to="/">Contact</Link>
            </div>
            <div className="item">
              <Link className="link" to="/">Stores</Link>
            </div>

            <div className="icons">
              <IoSearchSharp/>
              <IoPersonOutline/>
              <MdOutlineFavoriteBorder/>
              <div className="cartIcon">
                <FiShoppingCart/>  
                <span>0</span>              
              </div>
              
            </div>
        </div>  
      </div>         
    </div>
  )
}

export default Navbar
