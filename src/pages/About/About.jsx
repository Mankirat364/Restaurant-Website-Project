import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { IoFastFoodSharp } from "react-icons/io5";
import aboutImage1 from '../../assets/about-img-1.jpg';
import { SiCodechef } from "react-icons/si";
import aboutImage2 from '../../assets/about-img-2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlateWheat } from "react-icons/fa6";
import author from '../../assets/author.png';
import signature from '../../assets/signature.png';

const About = () => {
  return (
    <motion.div
      className='aboutpage'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container-fluid">
        <motion.div
          className="row aboutdivider gap-5"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="col-md-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="container-back">
              <img src={aboutImage1} alt="" />
              <motion.div
                className="container-front"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <img src={aboutImage2} alt="" />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="col-md-7 resposivebout"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aboutheading">
              <FaPlateWheat size={20} color='red' />
              <p>ABOUT US</p>
            </div>
            <div className="aboutdesc">
              <p>A variety of flavors from American cuisine</p>
              <p>
                Every dish is not just prepared; it is crafted with utmost precision and a deep
                understanding of flavor harmony. Our experienced chefs bring passion and expertise
                to every plate, ensuring a delightful dining experience.
              </p>
            </div>
            <motion.div
              className="bottomaboutdiv container-fluid"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="row d-flex align-items-center borderobttom pb-4">
                <motion.div
                  className="col-md-6 d-flex gap-2 mt-4 borderright"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <IoFastFoodSharp size={40} color='#faad39' />
                  <div className="flexcolumn">
                    <h1>Exceptional Quality Cuisine</h1>
                    <p>Delighting your taste buds with exquisite flavors,<br /> served with warmth and care.</p>
                  </div>

                </motion.div>
                <motion.div
                  className="col-md-6 d-flex gap-2 pt-4"
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <SiCodechef size={40} color='#faad39' />
                  <div className="flexcolumn">
                    <h1>Expert Chefs</h1>
                    <p>Our skilled chefs craft each dish with passion,<br /> delivering flavors that leave a lasting impression.</p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="col-md-12 d-flex gap-4 mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="profilephoto">
                  <img src={author} alt="" />
                </div>
                <div className="flexcolumn gap-0 flex23">
                  <p>Zbuild, CEO</p>
                  <h1>Lorem ipsum</h1>
                </div>
                <div className="">
                  {/* <img src={signature} alt="" /> */}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
