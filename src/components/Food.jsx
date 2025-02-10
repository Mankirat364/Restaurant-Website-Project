import React from 'react';
import './Food.css';
import food1 from '../assets/food-1.png';
import food2 from '../assets/food-2.png';
import food3 from '../assets/food-3.png';
import { IoFastFoodSharp } from "react-icons/io5";
import FoodCard from './FoodCard';
import Slider from "react-slick";
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Food = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, 
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <motion.div
      className='foodSection'
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      viewport={{ once: true }} 
    >
      <div className="foodtitle">
        <div className="foodhead">
          <IoFastFoodSharp size={30} color='red' />
          <div className="fooddesc"> 
            <p>BEST FOOD</p>
          </div>
          <IoFastFoodSharp size={30} color='red' />
        </div>
        <h1>Popular Food Items</h1>
      </div>

      {/* React Slick Slider */}
      <Slider {...settings} className="slider-container">
        <FoodCard imageLink={food1} title="Egg and Cucumber" desc="Perfect dining experience with fresh high-quality ingredients." />
        <FoodCard imageLink={food2} title="Chicken Fried Rice" desc="Perfect dining experience with fresh high-quality ingredients." />
        <FoodCard imageLink={food3} title="Chicken Leg Piece" desc="Perfect dining experience with fresh high-quality ingredients." />
        <FoodCard imageLink={food1} title="Egg and Cucumber" desc="Perfect dining experience with fresh high-quality ingredients." />
        <FoodCard imageLink={food2} title="Chicken Fried Rice" desc="Perfect dining experience with fresh high-quality ingredients." />
      </Slider>
    </motion.div>
  );
}

export default Food;
