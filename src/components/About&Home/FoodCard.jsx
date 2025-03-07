import React from 'react'
import './Food.css'

import { FaShoppingCart } from "react-icons/fa";
const FoodCard = ({imageLink,title,desc}) => {
    return (
        <div className='foodCard'>
            <div className="logo2">
                <img src={imageLink} alt="" />
            </div>
            <div className="foodCardContent">
                <p>{title}</p>
                <h6>{desc}</h6>
            </div>
            <div className="foodrating">
                <div className="foodprice">
                    <p>$4500</p>
                </div>
                <div className="stars-container">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className="star">★</span>
                    ))}
                </div>
            </div>
            <div className="shoplogo">
                <FaShoppingCart color='white' />
            </div>
        </div>
    )
}

export default FoodCard
