import React from 'react';
import './Shop.css';
import food_1 from '../../assets/food-1.png';
import food_2 from '../../assets/food-2.png';
import food_3 from '../../assets/food-3.png';
import { BsCartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Shop = () => {
  const food = [
    {
      image: food_1,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, // Number of stars for rating
      cart: <BsCartFill />,
    },
    {
      image: food_2,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, // Number of stars for rating
      cart: <BsCartFill />,
    },
    {
      image: food_3,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, // Number of stars for rating
      cart: <BsCartFill />,
    },
    {
      image: food_1,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, // Number of stars for rating
      cart: <BsCartFill />,
    },
    {
      image: food_1,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, // Number of stars for rating
      cart: <BsCartFill />,
    },
    {
      image: food_2,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, // Number of stars for rating
      cart: <BsCartFill />,
    },
    {
      image: food_3,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, // Number of stars for rating
      cart: <BsCartFill />,
    },
    {
      image: food_1,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, // Number of stars for rating
      cart: <BsCartFill />,
    },
    {
      image: food_1,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, // Number of stars for rating
      cart: <BsCartFill />,
    },
    {
      image: food_2,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, // Number of stars for rating
      cart: <BsCartFill />,
    },
    {
      image: food_3,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, // Number of stars for rating
      cart: <BsCartFill />,
    },
    {
      image: food_1,
      name: "Egg and Cucumber",
      desc: "It’s the perfect dining experience where every dish is crafted with fresh high quality",
      price: "4,500",
      rating: 5, // Number of stars for rating
      cart: <BsCartFill />,
    },
  ];

  return (
    <>
      <div className="shopBgImage">
        <div className="shopText">
          <h1>SHOP</h1>
          <p>Home / <span>Shop</span></p>
        </div>
      </div>
      
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
            <div className="bottomText">
              <p className="price">${item.price}</p>
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
</div>

    </>
  );
};

export default Shop;






