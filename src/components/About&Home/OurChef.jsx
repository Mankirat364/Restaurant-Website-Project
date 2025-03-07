import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './OurChef.css';
import chef1 from '../../assets/chef-1.jpg';
import chef2 from '../../assets/chef-2.jpg';
import chef3 from '../../assets/chef-3.jpg';

const chefs = [
  { id: 1, name: 'Alexander Grant', role: 'Sr. Chef', image: chef1 },
  { id: 2, name: 'Benjamin Carter', role: 'Team Leader', image: chef2 },
  { id: 3, name: 'Daniel Reynolds', role: 'Sous Chef', image: chef3 }
  
];

const OurChef = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section 
      ref={sectionRef} 
      className="our-chef-section"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="section-tag">👨‍🍳 OUR HEAD CHEF</p>
      <h2 className="section-title">Get to Know Our Culinary Master</h2>
      <div className="chef-cards">
        {chefs.map((chef, index) => (
          <motion.div 
            className="chef-card" 
            key={chef.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="chef-image">
              <img src={chef.image} alt={chef.name} />
              <motion.div 
                className="social-icons"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <a href="#" className="icon"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="icon"><i className="fab fa-youtube"></i></a>
                <motion.span 
                  className="share-text"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                >
                  Share
                </motion.span>
              </motion.div>
            </div>
            <div className="chef-info">
              <h3>{chef.name}</h3>
              <p>{chef.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default OurChef;
