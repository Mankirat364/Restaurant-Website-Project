import React, { useEffect, useState } from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaShoppingCart,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { motion } from 'framer-motion'
import { IoIosCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

import locationimage from "../../assets/location.png";
import logosecond from '../../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".nav-item")) {
        setDropdown(null);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const navigateTo = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="location">
          <img src={locationimage} alt="Location" />
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </div>
        <div className="auth">
          <FaUser />
          <span>Login / Register</span>
          <div className="follow">
            <p>Follow Us:</p>
          </div>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className={`navbar-bottom ${isScrolled ? "fixed-nav" : ""}`}>
        <Link to="/">
          <div className="logo d-flex align-items-center gap-2">
            <h2>Restaurant</h2>
          </div>
        </Link>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/Aboutres" style={{ textDecoration: "none", color: "black" }}>
            <span>ABOUT</span>
          </Link>

          <div className="nav-item" onClick={() => toggleDropdown("shop")}>
            <span className="pack">
              SHOP <MdArrowDropDown size={30} />
            </span>
            {dropdown === "shop" && (
              <div className="dropdown">
                <span onClick={() => navigateTo("/Shop")}>Shop</span>
                <span onClick={() => navigateTo("/Shop-details")}>Shop Details</span>
                <span onClick={() => navigateTo("/Cart")}>Cart</span>
                <span onClick={() => navigateTo("/Checkout")}>Checkout</span>
              </div>
            )}
          </div>

          {/* BLOG DROPDOWN */}
          <div className="nav-item" onClick={() => toggleDropdown("blog")}>
            <span className="pack">
              BLOG <MdArrowDropDown size={30} />
            </span>
            {dropdown === "blog" && (
              <div className="dropdown">
                <Link to="/blogs" style={{ textDecoration: "none", color: "black" }}>
                  <span>Blogs</span>
                </Link>
                <Link to="/blogdetail" style={{ textDecoration: "none", color: "black" }}>
                  <span>Blogs Detail</span>
                </Link>
              </div>
            )}
          </div>

          <span onClick={() => navigateTo("/Contact")}>CONTACT</span>
        </div>

        <div className="nav-icons">
          <IoSearchOutline />
          <FaShoppingCart />
          <GiHamburgerMenu className="initial" onClick={toggleMenu} />
          <div className="button">
            <button>
              Order now <BsArrowRightSquareFill size={20} />
            </button>
          </div>
        </div>
      </div>

{isMenuOpen && (
  <motion.div 
    className="mobile-navigation"
    initial={{ x: "100%" }}   
    animate={{ x: 0 }}       
    exit={{ x: "100%" }}    
    transition={{ duration: 0.3, ease: "easeInOut" }} 
  >
    <div className="d-flex flex-column justify-content-between p-4">
      <div className="d-flex pb-4 navigation-logo align-items-center justify-content-between">
        <h1>Restaurant</h1>
        <IoIosCloseCircle size={30} onClick={toggleMenu} />
      </div>

      <div className="ul-list-navigation pt-4">
        <Link onClick={() => navigateTo("/")}>Home</Link>
        <Link to = "/Aboutres">About</Link>

        <div className="nav-item">
          <span className="pack" onClick={() => toggleDropdown("shop")}>
            Shop <MdArrowDropDown size={20} />
          </span>
          {dropdown === "shop" && (
            <motion.div 
              className="dropdown-content"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span onClick={() => navigateTo("/Shop-details")}>Shop Details</span>
              <span onClick={() => navigateTo("/Cart")}>Cart</span>
              <span onClick={() => navigateTo("/Checkout")}>Checkout</span>
            </motion.div>
          )}
        </div>

        <div className="nav-item">
          <span className="pack" onClick={() => toggleDropdown("blog")}>
            Blog <MdArrowDropDown size={20} />
          </span>
          {dropdown === "blog" && (
            <motion.div 
              className="dropdown-content"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span onClick={() => navigateTo("/blogs")}>Blogs</span>
              <span onClick={() => navigateTo("/blogdetail")}>Blog Details</span>
            </motion.div>
          )}
        </div>

        <Link to='/Contact'>Contact</Link>
      </div>
    </div>

    <div className="d-flex flex-column p-4">
      <h1>Follow Us on :</h1>
      <div className="d-flex align-items-center gap-2">
        <FaFacebookF size={30} />
        <FaInstagram size={30} />
        <FaLinkedin size={30} />
      </div>
    </div>
  </motion.div>
)}


    </div>
  );
};

export default Navbar;
