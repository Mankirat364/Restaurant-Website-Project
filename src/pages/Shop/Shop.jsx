import React from 'react';
import './Shop.css';
import food_1 from '../../assets/food-1.png';
import food_2 from '../../assets/food-2.png';
import food_3 from '../../assets/food-3.png';
import { BsCartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Paginations from '../../components/Paginations/Paginations';
import Footer from '../../components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import ShopHeader from '../../components/ShopPage/ShopHeader';

const Shop = () => {
  const food = [
    {
      image: food_1,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, 
      cart: <BsCartFill />,
    },
    {
      image: food_2,
      name: "Lunch Foods",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, 
      cart: <BsCartFill />,
    },
    {
      image: food_3,
      name: "Dinner Foods",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, 
      cart: <BsCartFill />,
    },
    {
      image: food_1,
      name: "Desert Foods",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, 
      cart: <BsCartFill />,
    },
    {
      image: food_1,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, 
      cart: <BsCartFill />,
    },
    {
      image: food_2,
      name: "Lunch Foods",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, 
      cart: <BsCartFill />,
    },
    {
      image: food_3,
      name: "Desert Foods",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, 
      cart: <BsCartFill />,
    },
    {
      image: food_1,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, 
      cart: <BsCartFill />,
    },
    {
      image: food_1,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, 
      cart: <BsCartFill />,
    },
    {
      image: food_2,
      name: "Desert Foods",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, 
      cart: <BsCartFill />,
    },
    {
      image: food_3,
      name: "Lunch Foods",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, 
      cart: <BsCartFill />,
    },
    {
      image: food_1,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, 
      cart: <BsCartFill />,
    },
  ];

  return (
    <>
     
     <ShopHeader title="SHOP" breadcrumb="Shop" />
      <div className="container">
        <div className="row">
          {food.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-3 mb-5 shopCards" key={index}>
              <div className="shopCard">
                <div className="shopImg">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="text">
                  <h5>{item.name}</h5>
                  <p className="desc">{item.desc}</p>
                  <div className="shopbottomText">
                    <p className="shopprice">${item.price}</p>
                    {/* Rating display */}
                    <p className="rating">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </p>
                  </div>
                  <div className="cart">
                    <p>{item.cart}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          <Paginations/>
      </div>
          <Footer/>

    </>
  );
};

export default Shop;






