import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './foodtray.css';
import foodimg1 from '../assets/foodimage1.jpg';
import foodimg2 from '../assets/foodimage2.jpg';
import foodimg3 from '../assets/foodimage3.jpg';
import foodimg4 from '../assets/foodimage4.jpg';
import foodimg5 from '../assets/foodimage4.jpg';

const FoodtraySec = () => {
    const images = [foodimg1, foodimg2, foodimg3, foodimg4, foodimg5];

    // Ref and InView for animation trigger
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <motion.div 
            ref={sectionRef}
            className="foodtray"
            initial={{ opacity: 0, y: 50 }}  // Start hidden and lower
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 0.8, ease: "easeOut" }} 
        >
            {images.map((img, index) => (
                <motion.div 
                    key={index} 
                    className="food-item"
                    whileHover={{ scale: 1.1 }} // Hover effect
                    transition={{ duration: 0.3 }}
                >
                    <img src={img} alt={`Food ${index + 1}`} />
                    <motion.div 
                        className="overlay"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }} 
                        transition={{ duration: 0.3 }}
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default FoodtraySec;
