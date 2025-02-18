import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Aboutesti.css';
import girlbg from '../assets/girlbg.png';
import user1 from '../assets/user1.png';
import user2 from '../assets/user1.png';
import user3 from '../assets/user1.png';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
    user: user1,
  },
  {
    id: 2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries but also the leap into electronic typesetting.",
    user: user2,
  },
  {
    id: 3,
    text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from Cicero's writings are also included.",
    user: user3,
  },
];

const AboutTesti = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // Ref and InView Hook
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.div 
      ref={sectionRef} 
      className="abouttestimsec"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="testimonial-container2">
        {/* Left Section: Text & Slider */}
        <motion.div 
          className="testimonial-text2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="section-tag2">TESTIMONIALS</p>
          <h2 className="section-title2">What have lots of happy customer feedback</h2>
          <hr className="divider2" />

          <Slider {...settings} className="testimonial-slider2">
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                className="testimonial-slide2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: testimonial.id * 0.2 }}
              >
                <FaQuoteLeft className="quote-icon2" />
                <p className="quote2">{testimonial.text}</p>
                <div className="user-images2">
                  {testimonials.map((t) => (
                    <motion.img 
                      key={t.id} 
                      src={t.user} 
                      alt="User" 
                      className="user-icon2"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        {/* Right Section: Image Animation */}
        <motion.div 
          className="testimonial-image2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="hexagon2"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={girlbg} alt="Girl" className="girl-image2" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutTesti;
