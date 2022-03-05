import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import img1 from './images//profile-removebg-preview.png'



export default function Contact() {
  return (
    <>
      <h1>Hi , My name is ABHIJIT NAG</h1>

      <div className='contact'>

        <div className='sicon'><a href="https://www.facebook.com/profile.php?id=100024876668698"><FaFacebookF /></a></div>
        <a href=""><img src={img1} className='contact_image'></img></a>
        <div className='sicon'><a href=""><FaInstagram /></a></div>


      </div>

      <div className='profile_card'>

        <div className='profile_card_content'>
          <div className='profile_image'>
            <img src='images/profile-removebg-preview.png'></img>
          </div>
          <div className='profile_content'>
            <span id='name'>Abhijit Nag</span>
            <span>NIT DURGAPUR</span>
            <span>1st Year B-Tech Student in CSE</span>

          </div>
        </div>
      </div>
    </>
  )
}
