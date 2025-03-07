import React from 'react';
import { motion } from 'framer-motion';
import './AboutRes.css';
import breadcrumber from '../../assets/breadcrumb-bg.jpg';
import { Link } from 'react-router-dom';
import About from '../About/About';
import InnerCta from '../../components/About&Home/InnerCta';
import OurChef from '../../components/About&Home/OurChef';
import AboutTesti from '../../components/About&Home/AboutTesti';
import FoodtraySec from '../../components/About&Home/FoodtraySec';

const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"], 
    transition: {
      ease: "linear",
      duration: 40, 
      repeat: Infinity,
    },
  },
};

const AboutRest = () => {
  return (
    <div className='AboutResSec'>
      <div className="firstaboutres">
        <img src={breadcrumber} alt="" />
        <div className="aboutrescontent">
          <div className="aboutreshead">
            <h1>ABOUT US</h1>
            <div className="flexaboutrescontent">
              <Link to="/" style={{ textDecoration: "none", color: "white", paddingRight: "1vw" }}>
                <p>Home /</p>
              </Link>
              <p style={{ color: "red" }}> About us</p>
            </div>
          </div>
        </div>
      </div>
      <About />

      <div className="marquee-container">
        <motion.div className="marquee-content" variants={marqueeVariants} animate="animate">
          <span>
            BURGER CHICKEN PIZZA GRILLED CHICKEN CHICKEN BURGER CHICKEN PIZZA GRILLED CHICKEN CHICKEN BURGER CHICKEN PIZZA GRILLED CHICKEN CHICKEN 
          </span>
        </motion.div>
        <motion.div className="marquee-content" variants={marqueeVariants} animate="animate">
          <span>
            BURGER CHICKEN PIZZA GRILLED CHICKEN CHICKEN BURGER CHICKEN PIZZA GRILLED CHICKEN CHICKEN BURGER CHICKEN PIZZA GRILLED CHICKEN CHICKEN 
          </span>
        </motion.div>
      </div>

        <InnerCta />
        <OurChef />
        <AboutTesti />
        <FoodtraySec />
    </div>
  )
}

export default AboutRest;
