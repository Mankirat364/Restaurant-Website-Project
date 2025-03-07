import React from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import './Contact.css'
import booking from '../../assets/booking-bg.jpg'
import { BsArrowRightSquareFill } from 'react-icons/bs';
const Contact = () => {
  return (
    <div className='Contact'>
      <img src={booking} alt="" />
      <div className="contactForm">
        <div className="contactContent">
          <p className='contenthead'><IoFastFoodSharp/> BOOK A PARTY <IoFastFoodSharp/></p>
          <h1 className='contentMainHead'>Make a Reservation</h1>
          <div className="formContainer">
                <div className="firstrow gap-3">
                  <div className="firstdiver">
                      <p>Select Date*</p>
                      <input type="date" />
                  </div>
                  <div className="firstdiver">
                      <p>Select Time*</p>
                      <input type="date" />
                  </div>
                </div>
                <div className="firstdiver">
                      <p>Type of Service*</p>
                      <input type="text" placeholder='Service 1' />
                  </div>
                <div className="firstdiver">
                      <p>Message*</p>
                      <textarea rows={5} placeholder='Type here'></textarea>
                  </div>
          </div>
        </div>
        <div className="button pt-3" id='contactbutton'>
                    <button>Book now <BsArrowRightSquareFill size={20} /></button>
                  </div>
      </div>
    </div>
  )
}

export default Contact
