import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube, FaUser, FaShoppingCart } from "react-icons/fa";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";

import locationimage from '../assets/location.png';
import darkLogo from '../assets/logo-dark.svg';

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

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

  /****************navigation shop pages*****************/
  const navigate = useNavigate();
  const shop = () =>{
    navigate('/Shop')
  }
  const ShopDetails = () =>{
    navigate('/Shop-details')
  }
  const Cart = () =>{
    navigate('/Cart')
  }
  const Checkout = () =>{
    navigate('/Checkout')
  }
   /****************navigation pages*****************/
   const Pages = () =>{
    navigate('/Pages')
  }

  /****************Contact*****************/
  const Contact = () =>{
    navigate('/Contact')
  }
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
          <Link to="/About" style={{textDecoration: "none", color :"black"}}>
          <span >ABOUT</span>
          </Link>

          <div className="nav-item" onMouseEnter={() => toggleDropdown("shop")} onMouseLeave={() => toggleDropdown(null)}>
            <span className="pack">SHOP <MdArrowDropDown size={30} /></span>
            {dropdown === "shop" && (
              <div className="dropdown">
                <span onClick={shop}>Shop</span>
                <span onClick={ShopDetails}>Shop Details</span>
                <span onClick={Cart}>Cart</span>
                <span onClick={Checkout}>Check Out</span>
              </div>
            )}
          </div>
          
          {/* <div className="nav-item" onMouseEnter={() => toggleDropdown("pages")} onMouseLeave={() => toggleDropdown(null)}>
            <span className="pack">PAGES <MdArrowDropDown size={30} /></span>
            {dropdown === "pages" && (
              <div className="dropdown">
               <span onClick={ Pages}>Menu Style 1</span>
                <span>Menu Style 2</span>
                <span>Reservation</span>
                <span>Services</span>
                <span>Our Chef</span>
                <span>Gallery</span>
                <span>Testimonials</span>
                <span>FAQ</span>
              </div>
            )}
          </div> */}

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

          <span onClick={Contact}>CONTACT</span>
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
