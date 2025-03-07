import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
import bannerimage from '../../assets/bannerback.jpg';
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from 'react-icons/bs';
import foodback from '../../assets/food.png';
import About from '../About/About';
import Food from '../../components/About&Home/Food';
import Video from '../../components/About&Home/Video';
import Discount from '../../components/About&Home/Discount';
import SpecialMenu from '../../components/About&Home/SpecialMenu';
import Price from '../../components/About&Home/Price';
import Contact from '../../components/About&Home/Contact';
import Testimonial from '../../components/About&Home/Testimonial';
import NewsBlog from '../../components/About&Home/NewsBlog';

const slides = [
  {
    title: "Savor the Flavor",
    subtitle: "Gourmet Dining/Café",
    description: "Indulge in a culinary journey where flavors meet elegance. Discover handcrafted dishes made with the finest ingredients, served in a warm and inviting ambiance."
  },
  {
    title: "Experience the Best",
    subtitle: "Fine Dining",
    description: "Enjoy a world-class menu prepared by top chefs, bringing exquisite taste and artful presentation to your table."
  },
  {
    title: "Taste the Perfection",
    subtitle: "Signature Dishes",
    description: "Every bite tells a story. Our signature dishes are crafted with passion and precision to delight your senses."
  }
];

const PrevArrow = ({ onClick }) => (
  <BsArrowLeftSquareFill className="arrow prev" size={30} onClick={onClick} />
);

const NextArrow = ({ onClick }) => (
  <BsArrowRightSquareFill className="arrow next" size={30} onClick={onClick} />
);

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  return (
    <motion.div
      className='HomePage'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="innerhomecontainer">
        <div className="dividerContainer">
          <motion.div
            className="cardContainer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Slider {...settings} className="slider">
              {slides.map((slide, index) => (
                <div className={`slide ${index === currentIndex ? 'active' : ''}`} key={index}>
                  <p>{slide.title}</p>
                  <h1>Gourmet <div className="imagediv"><img src={bannerimage} alt="" /></div></h1>
                  <h1 className='textfix'>{slide.subtitle}</h1>
                  <p className='descri' style={{width: "30%"}}>{slide.description}</p>
                  <motion.div className="button" id='homebutton' whileTap={{ scale: 0.9 }}>
                    <button>Order now <BsArrowRightSquareFill size={20} /></button>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>

          <motion.div
            className="cardContainer2"
            initial={{ x: "100%", opacity: 0, scale: 0 }}
            animate={{ x: "0%", opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          >
            <div className="navigateNumber">
              {slides.map((_, index) => (
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
            <img src={foodback} alt="Food background" />
          </motion.div>
        </div>

        <motion.div
          className="loaderflexbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="loader">
            {slides.map((_, index) => (
              <div key={index} className={`loader-section ${index === currentIndex ? 'active' : ''}`}></div>
            ))}
          </div>
          <div className="buttoner">
            <BsArrowLeftSquareFill size={30} className="arrow" onClick={() => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))} />
            <BsArrowRightSquareFill size={30} className="arrow" onClick={() => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))} />
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
