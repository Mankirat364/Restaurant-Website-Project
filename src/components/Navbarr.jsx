import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";
import user from "../assets/user.png";
import path from "../assets/path.png";
import path2 from "../assets/path2.png";
import locationimage from "../assets/location.png";
import darklogo from "../assets/logo-dark.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll Position:", document.documentElement.scrollTop); // Debugging
      if (document.documentElement.scrollTop > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Navbar">
      <div className="navbarimage">
        <img src={path} alt="" />
        <div className="navbarflexbox">
          <div className="logo">
            <img src={locationimage} alt="" />
            <p>Rd. Santa Ana, Illinois 85486, United States</p>
          </div>
          <div className="logo">
            <div className="logo">
              <img src={user} alt="" />
              <p>Login</p>
            </div>
            <div className="logo">
              <p>/</p>
              <p>Register</p>
            </div>
            <div className="logo followus">
              <p>Follow Us:</p>
              <div className="logo">
                <FaFacebookF color="white" />
                <FaInstagram color="white" />
                <FaLinkedin color="white" />
                <FaYoutube color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mainnavbar ${isScrolled ? "sticky" : ""}`}>
        <img src={path2} alt="" />
        <div className="navbarmainsecondpart">
          <div className="logo">
            <img src={darklogo} alt="" />
          </div>
          <div className="logo logoLinks">
            {["Home", "About", "Shop", "Pages", "Blog", "Contact"].map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="logo logoLinks">
            <IoSearchOutline />
            <FaShoppingCart />
            <div className="button">
              <button className="orderbutton">
                Order Now <BsArrowRightSquareFill size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
