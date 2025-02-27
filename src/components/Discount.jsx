import React from 'react';
import { motion } from 'framer-motion';
import './Discount.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoFastFoodSharp } from "react-icons/io5";
import { BsArrowRightSquareFill } from 'react-icons/bs';
import discountimage from '../assets/discount-img.jpg';
import discountsticker from '../assets/discount-sticker.png';

const Discount = () => {
    return (
        <motion.div
            className='DiscountSection'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="container-fluid">
                <div className="row">
                    <motion.div
                        className="col-md-6 border"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="discountContent">
                            <p><IoFastFoodSharp color='red' /> TASTE THE BEST</p>
                            <h1 className='disheading'>Delicious meals<br /> with love.</h1>
                            <p className='queshead'>What Are Our Operating Hours?</p>
                            <p className='quesdesc'>We are open daily to serve you the finest dishes.<br /> Enjoy fresh, high-quality meals anytime!</p>

                            <hr />
                            <h1 className='DiscHead'>Limited-Time Exclusive Discounts!</h1>
                            <div className="d-flex pt-2 align-items-center gap-2">
                                <div className="daysBlock flexcolumn">
                                    <p className='number'>20</p>
                                    <p className='days'>DAYS</p>
                                </div>
                                <div className="daysBlock flexcolumn">
                                    <p className='number'>19</p>
                                    <p className='days'>HOURS</p>
                                </div>
                                <div className="daysBlock flexcolumn">
                                    <p className='number'>7</p>
                                    <p className='days'>MINS</p>
                                </div>
                                <div className="daysBlock flexcolumn">
                                    <p className='number'>11</p>
                                    <p className='days'>SECS</p>
                                </div>
                            </div>
                            `

                            {/* button */}
                            <div className="button pt-5">
                                <button id='Discountbutton'>Order now <BsArrowRightSquareFill size={20} /></button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-md-6 border"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="discountimagediv">
                            <img src={discountimage} alt="" />
                            <img src={discountsticker} alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Discount;
