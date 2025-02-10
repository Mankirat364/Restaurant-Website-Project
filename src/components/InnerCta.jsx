import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './InnerCta.css';
import pizzaImage from '../assets/inner-cta-img.png';
import pizzatag from '../assets/inner-cta-discount-tag.png';

const InnerCta = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div ref={sectionRef} className="innercta-section2">
      <motion.div
        className="innercta-content2"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="welcome-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          WELCOME FRESHEAT
        </motion.p>

        <motion.h1
          className="cta-heading2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Today's Special Food
        </motion.h1>

        <motion.p
          className="cta-subheading2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Limited Time Offer
        </motion.p>

        <motion.button
          className="order-btn2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          ORDER NOW →
        </motion.button>
      </motion.div>

      <div className="innercta-image2">
        <motion.img
          src={pizzaImage}
          alt="Pizza"
          className="pizza-img2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
        />

        <motion.img
          src={pizzatag}
          alt="Discount Tag"
          className="discount-tag2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1.2 } : {}}
          transition={{ duration: 0.5, delay: 1.2, type: "spring", stiffness: 100 }}
        />

      </div>
    </div>
  );
};

export default InnerCta;
