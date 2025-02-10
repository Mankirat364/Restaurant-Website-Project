import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube, FaUser, FaShoppingCart } from "react-icons/fa";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";

import locationimage from '../assets/location.png';
import darkLogo from '../assets/logo-dark.svg';

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };
  useEffect(() => {
    const handleScroll = () => {
      console.log("Window ScrollY:", window.scrollY); 
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    console.log("isScrolled State Updated:", isScrolled); 
  }, [isScrolled]);
  console.log(isScrolled);
  
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="location">
          <img src={locationimage} alt="" />
          <span>Red, Santa Ana, Illinois 85496, United States</span>
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
        <div className="logo">
          <img src={darkLogo} id="darkLogo" alt="" />
        </div>
        </Link>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/Aboutres" style={{textDecoration: "none", color :"black"}}>
          <span >ABOUT</span>
          </Link>

          <div className="nav-item" onMouseEnter={() => toggleDropdown("shop")} onMouseLeave={() => toggleDropdown(null)}>
            <span className="pack">SHOP <MdArrowDropDown size={30} /></span>
            {dropdown === "shop" && (
              <div className="dropdown">
                <span>All Products</span>
                <span>New Arrivals</span>
                <span>Best Sellers</span>
              </div>
            )}
          </div>
          
          <div className="nav-item" onMouseEnter={() => toggleDropdown("pages")} onMouseLeave={() => toggleDropdown(null)}>
            <span className="pack">PAGES <MdArrowDropDown size={30} /></span>
            {dropdown === "pages" && (
              <div className="dropdown">
                <span>About Us</span>
                <span>FAQ</span>
                <span>Testimonials</span>
              </div>
            )}
          </div>

          <div className="nav-item" onMouseEnter={() => toggleDropdown("blog")} onMouseLeave={() => toggleDropdown(null)}>
            <span className="pack">BLOG <MdArrowDropDown size={30} /></span>
            {dropdown === "blog" && (
              <div className="dropdown">
                <span>Latest News</span>
                <span>Trends</span>
                <span>Guides</span>
              </div>
            )}
          </div>

          <span>CONTACT</span>
        </div>

        <div className="nav-icons">
          <IoSearchOutline />
          <FaShoppingCart />
          <GiHamburgerMenu className="initial" />
          <div className="button">
            <button>Order now <BsArrowRightSquareFill size={20} /></button>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
