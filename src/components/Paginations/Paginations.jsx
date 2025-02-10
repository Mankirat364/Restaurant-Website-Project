import React from 'react';
import './Paginations.css'
import { BsArrowLeft } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi2";

const Paginations = () => {
  return (
    <>
      <div className="pagination">
        <button className="page-arrow left"><BsArrowLeft/></button>
        <button className="page-number one">1</button>
        <button className="page-number">2</button>
        <button className="page-number">3</button>
        <button className="page-arrow right"><HiArrowRight /></button>
      </div>

    </>
  )
}

export default Paginations
