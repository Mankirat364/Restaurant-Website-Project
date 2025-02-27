import React from 'react';
// import logo from '../../assets/logo-light.svg';
import { LiaFacebookF } from "react-icons/lia";
import { FaLinkedinIn, FaYoutube, FaInstagramSquare, FaAngleDoubleRight, FaArrowRight } from "react-icons/fa";
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className="container  mt-5">
                <div className="row">
                    <div className="col-md-4 pt-3 pt-5 mt-md-5">
                        <div className="logo">
                            {/* <img src={logo} alt="" /> */}
                        </div>
                        <div className="pt-4">
                            <p className='footer-para'>
                                Phasellus ultricies aliquam volutpat <br />
                                ullamcorper laoreet neque, a lacinia curabitur <br />
                                lacinia mollis
                            </p>
                        </div>
                        <div className="socialsite-icons">
                            <div className='icons footer-text'>
                                <LiaFacebookF />
                            </div>
                            <div className='icons footer-text'>
                                <FaLinkedinIn />
                            </div>
                            <div className='icons footer-text'>
                                <FaYoutube />
                            </div>
                            <div className='icons footer-text'>
                                <FaInstagramSquare />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 pt-3 pt-md-5 mt-md-5 quick-link">
                        <h4 className='mb-4 text-white'>Quick Links</h4>
                        <Link to='/About' className='footer-text'><FaAngleDoubleRight /> About Us</Link>
                        <Link to='/Shop' className='footer-text'><FaAngleDoubleRight /> Our Shop</Link>
                        <Link to='/Blogs' className='footer-text'><FaAngleDoubleRight /> Our Blogs</Link>
                        <Link to='/Contact' className='footer-text'><FaAngleDoubleRight /> Contact Us</Link>
                    </div>

                    {/* Our Menu */}
                    <div className="col-md-2 pt-3 pt-md-5 mt-md-5">
                        <h4 className='mb-4 text-white'>Our Menu</h4>
                        <p className='footer-text'><FaAngleDoubleRight /> Burger King</p>
                        <p className='footer-text'><FaAngleDoubleRight /> Pizza King</p>
                        <p className='footer-text'><FaAngleDoubleRight /> Fresh Food</p>
                        <p className='footer-text'><FaAngleDoubleRight /> Vegetable</p>
                        <p className='footer-text'><FaAngleDoubleRight /> Desserts</p>
                    </div>

                    {/* Newsletter Section with Input */}
                    <div className="col-md-4 pt-3 pt-md-5 mt-md-5">
                        <h4 className='mb-4 text-white'>News Letter</h4>
                        <p className='footer-text'><FaAngleDoubleRight /> Monday – Friday : 8am – 4pm</p>
                        <p className='footer-text'><FaAngleDoubleRight /> Saturday : 8am – 12am</p>
                        <div className="email-input-field">
                            <input type="text" placeholder=' Your Email Address' />
                            <div className="footer-right-arrow">
                                <FaArrowRight />
                            </div>
                        </div>
                        {/* <div className="privacy-checkbox">
                            <input type="checkbox" id="privacy" />
                            <label htmlFor="privacy" className="privacy-label">
                                <p className='footer-text'> I agree with the <a href="/privacy-policy" className="privacy-link">Privacy Policy</a></p>
                            </label>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="bottom-footer mt-md-4">
                <div className="container mt-0">
                    <div className="bottomText">
                        <div className="col-md-8">
                        <p>© 2025 Restics. All rights reserved</p>
                        </div>
                        <div className="col-md-4">
                            <div className="bottomSecondText">
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
