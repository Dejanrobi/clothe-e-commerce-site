import React from 'react'
import { BsTwitter, BsPinterest } from 'react-icons/bs'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineGoogle } from 'react-icons/ai'
import './Contact.css';
const Contact = () => {
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
            <input type="text" placeholder='Enter your email...' name="" id="" />
            <button>JOIN US</button>
        </div>
        <div className="icons">
            <AiFillFacebook/>
            <AiOutlineInstagram/>
            <BsTwitter/>
            <AiOutlineGoogle/>
            <BsPinterest/>
        </div>
      </div>
    </div>
  )
}

export default Contact
