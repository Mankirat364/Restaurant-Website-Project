import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Price.css";
import "bootstrap/dist/css/bootstrap.min.css";
import specialities from "../../assets/specialities-img.png";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";

// Animation Variants
const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Price = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="pricesec">
      <div className="container-fluid">
        <div className="row">
          {/* Image Section (only animates when in view) */}
          <motion.div
            className="col-md-6 burger"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <img src={specialities} alt="" />
          </motion.div>

          {/* Text Section (only animates when in view) */}
          <motion.div
            className="col-md-6 sharp"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h6>
              <IoFastFoodSharp color="red" /> Crafted with 100% Passion & Dedication
            </h6>
            <h2>
              Elevating Your Dining Experience
              <br /> A Perfect Treat for Families!
            </h2>
            <p>
              Every dish is a masterpiece, prepared with precision and a deep love for flavors that delight your taste buds.
            </p>
            <hr />


            {/* List Items (only animates when in view) */}
            <div className="flexcolumn">
              {[
                "Extra charge applies for premium toppings.",
                "Minimum order of 2 required.",
                "Premium toppings cannot be customized."
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="d-flex gap-2 align-items-center"
                  variants={listItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={i}
                >
                  <FaRegCheckCircle color="red" size={30} />
                  <p className="pt-2 burgertext">{text}</p>
                </motion.div>
              ))}

              {/* Button with Hover Effect */}
              <motion.div
                className="button pt-3"
                id="BurgerButton"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button>
                  Know More <BsArrowRightSquareFill size={20} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Price;
