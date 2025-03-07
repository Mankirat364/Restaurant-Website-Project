import React from 'react';
import './Checkout.css';
import ShopHeader from '../../../components/ShopPage/ShopHeader';



const Checkout = () => {
    return (
        <>
           <ShopHeader title="CHECKOUT PAGE" breadcrumb="Checkout Page" />

            <div className="container mt-5">
                <div className="row">
                    {/* Left Side - Billing Details */}
                    <div className="col-md-6">
                        <h4>Billing Details</h4>
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">First Name*</label>
                                    <input type="text" className="form-control input-bg" placeholder="Enter Your First Name" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Last Name*</label>
                                    <input type="text" className="form-control input-bg" placeholder="Enter Your Last Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Company Name</label>
                                    <input type="text" className="form-control input-bg" placeholder="Enter Your Company Name" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" >Country*</label>
                                    <select className="form-select input-bg">
                                        <option selected="input-bg">Select Country</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                        <option value="UK">UK</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Street Address*</label>
                                    <input type="text" className="form-control input-bg" placeholder="Street Address " />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Address 2*</label>
                                    <input type="text" className="form-control input-bg" placeholder="Address" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Zip Code*</label>
                                    <input type="text" className="form-control input-bg" placeholder="Zip Code" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Phone*</label>
                                    <input type="text" className="form-control input-bg" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label className="form-label">Email Address*</label>
                                    <input type="text" className="form-control input-bg" placeholder="Email Address" />
                                </div>
                            </div>
                            
                        </form>
                        <div className="container">
                            <h4>Your Order</h4>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th className="text-end">Sub Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pain Relievers</td>
                                        <td className="text-end">$15.00</td>
                                    </tr>
                                    <tr>
                                        <td>Sub Total</td>
                                        <td className="text-end">$15.00</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td className="text-end">Free</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th className="text-danger">Total</th>
                                        <th className="text-end text-danger">$15.00</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    {/* Right Side - Order Summary */}
                    <div className="col-md-6">
                        <div className="container mt-5">
                            <h6>Shift to A Different Address</h6>
                            <textarea
                                className="form-control input-bg"
                                rows="4"
                                placeholder="Maharastra"
                            ></textarea>
                        </div>

                        <div className="container mt-5">
                            <div className="p-4 rounded input-bg">
                                <div className="">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="bankTransfer"/>
                                    <label className="form-check-label fw-bold" htmlFor="bankTransfer">
                                        Direct Bank Transfer
                                    </label>
                                    <p className="text-muted small">
                                        Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelttes port lacus quis enim var sed efficitur.
                                    </p>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="paymentMethod"
                                        id="shipDifferent"
                                    />
                                    <label className="form-check-label fw-bold" htmlFor="shipDifferent">
                                        Ship To A Different Address?
                                    </label>
                                </div>

                                <button className=" rounded-pill check-button">
                                    Place Your Order
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           
        </>
    );
}

export default Checkout;


