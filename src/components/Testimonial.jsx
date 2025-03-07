import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mainUser from "../assets/testimonial-img.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user1.png";
import user3 from "../assets/user1.png";
import cta1 from "../assets/cta-img-1.png";
import cta2 from "../assets/cta-img.jpg";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  arrows: true,
};

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      {/* Testimonial Section */}
      <motion.div
        className="testimonial"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="testimonial-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={mainUser} alt="Happy Customer" className="main-image" />
          <img src={user1} alt="User 1" className="small-img img1" />
          <img src={user2} alt="User 2" className="small-img img2" />
          <img src={user3} alt="User 3" className="small-img img3" />
        </motion.div>

        <motion.div
          className="testimonial-right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h6>CUSTOMER REVIEWS</h6>
          <h2>What Our Happy Customers Say</h2>
          <Slider {...settings} className="testimonial-slider">
            <div className="testimonial-slide">
              <p>
                "The flavors were absolutely delightful! Every bite was a perfect balance of taste and texture. Highly recommend!"
              </p>
              <h4>- Emily Carter</h4>
            </div>
            <div className="testimonial-slide">
              <p>
                "Exceptional service and mouthwatering dishes! This place never fails to impress."
              </p>
              <h4>- James Anderson</h4>
            </div>
            <div className="testimonial-slide">
              <p>
                "A truly unforgettable dining experience! The food was exquisite, and the ambiance was just perfect."
              </p>
              <h4>- Olivia Martinez</h4>
            </div>
          </Slider>
          <FaQuoteRight className="quote-icon" />
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="cta-container"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>
            Exclusive <span>Offers for Catering Events</span>
          </h2>
          <p>
            Elevate your special occasions with our delicious catering services! From sizzling gourmet burgers to exquisite handcrafted dishes, we bring flavors that impress.
          </p>

          <button className="cta-button">ORDER NOW →</button>
        </motion.div>

        <motion.div className="cta-images">
          <motion.img
            src={cta1}
            alt="Food Truck"
            className="cta-small-img"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          />
          <motion.img
            src={cta2}
            alt="Happy Customer"
            className="cta-main-img"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
