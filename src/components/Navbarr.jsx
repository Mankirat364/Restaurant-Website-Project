import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube, FaUser, FaShoppingCart } from "react-icons/fa";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";

import locationimage from '../assets/location.png';
import darkLogo from '../assets/logo-dark.svg';

import "./Navbar.css";

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
      console.log("Window ScrollY:", window.scrollY); // Log actual scroll value
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
      {/* Top Navbar */}
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

      {/* Bottom Navbar */}
      <div className={`navbar-bottom ${isScrolled ? "fixed-nav" : ""}`}>
        <div className="logo">
          <img src={darkLogo} id="darkLogo" alt="" />
        </div>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <span>ABOUT</span>

          <div className="nav-item" onMouseEnter={() => toggleDropdown("shop")} onMouseLeave={() => toggleDropdown(null)}>
            <span className="pack">SHOP <MdArrowDropDown size={30} /></span>
            {dropdown === "shop" && (
              <div className="dropdown">
                <span>Shop</span>
                <span>Shop Details</span>
                <span>Cart</span>
                <span>Check Out</span>
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
