import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import banner from '../../assets/banner-vector-1.png';
import bannerimage from '../../assets/bannerback.jpg';
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from 'react-icons/bs';
import foodback from '../../assets/food.png';
import vegie from '../../assets/vegie.png';
import About from '../About/About';
import Food from '../../components/Food';
import Video from '../../components/Video';
import Discount from '../../components/Discount';
import SpecialMenu from '../../components/SpecialMenu';
import Price from '../../components/Price';
import Contact from '../../components/Contact';
import Testimonial from '../../components/Testimonial';
import NewsBlog from '../../components/NewsBlog';

const Home = () => {
  const object = {
    title: "Good Food, Good Mood",
    longTitle: "Exquisite Dining/Cafes",
    description: ""
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  let slideCount = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className='HomePage'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="innerhomecontainer">
        <motion.img 
          src={banner} alt="" id='banner'
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img 
          src={vegie} alt="" id='vegie'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <div className="dividerContainer">
          <motion.div 
            className="cardContainer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
           
            <motion.div 
              className="slider" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {[...Array(slideCount)].map((_, index) => (
                <div className={`slide ${index === currentIndex ? 'active' : ''}`} key={index}>
                  <p>{object.title}</p>
                  <h1>Gourmet <div className="imagediv"><img src={bannerimage} alt="" /></div></h1>
                  <h1 className='textfix'>Dining/Café</h1>
                  <p className='descri'>
                    It is a long established fact that a reader will be distracted by the readable<br/>  content of a 
                    page when looking at the layout.
                  </p>
                  <motion.div 
                    className="button" id='homebutton'
                    whileTap={{ scale: 0.9 }}
                  >
                    <button>Order now <BsArrowRightSquareFill size={20} /></button>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="cardContainer2"
            initial={{ x: "100%", opacity: 0, scale: 0 }}
            animate={{ x: "0%", opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          >
           <div className="navigateNumber">
              {[...Array(slideCount)].map((_, index) => (
                <p
                  key={index}
                  style={{
                    transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
                    color: index === currentIndex ? "white" : "black",
                    transition: "transform 0.3s ease, color 0.3s ease"
                  }}
                >
                  {`0${index + 1}`}
                </p>
              ))}
            </div>
            <img src={foodback} alt="" />
          </motion.div>
        </div>

        <motion.div 
          className="loaderflexbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="loader">
            {[...Array(slideCount)].map((_, index) => (
              <div key={index} className={`loader-section ${index === currentIndex ? 'active' : ''}`}></div>
            ))}
          </div>
          <div className="buttoner">
            <BsArrowLeftSquareFill size={30} className="arrow" onClick={prevSlide} />
            <BsArrowRightSquareFill size={30} className="arrow" onClick={nextSlide} />
          </div>
        </motion.div>
      </div>

      <About />
      <Food />
      <Video />
      <Discount />
      <SpecialMenu />
      <Price />
      <Contact />
      <Testimonial />
      <NewsBlog />
    </motion.div>
  );
};

export default Home;
