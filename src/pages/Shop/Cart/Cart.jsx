import React from 'react';
import './Cart.css';
import cartImg from '../../../assets/food-3.png';
import ShopHeader from '../../../components/ShopPage/ShopHeader';


const Cart = () => {
    const cartitems = [
        {
            image: cartImg,
            name: "Chicken Leg Piece",
            price: "$10.00",
            quantity: 1,
            subtotal: "$10.00",
            remove: 'X'
        }
    ];

    return (
        <>
           <ShopHeader title="CART PAGE" breadcrumb="Cart Page" />
            <div className="container mt-md-5">
                <div style={{ overflowX: "auto" }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartitems.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className='image-name'>
                                        <img className='cartImage' src={item.image} alt={item.name} />
                                         <span className='item-name'>{item.name}</span>
                                        </div>
                                        
                                    </td>
                                    <td>
                                        <div className='padding'>
                                        {item.price}</div></td>
                                    <td>
                                        <div className="col-12 col-md-6">
                                            <div className="quantity-container padding">
                                                <div className="quantity">
                                                    <input type="text" id="quantity" value="1" readOnly />
                                                    <div className="buttons">
                                                        <button className="plus">+</button>
                                                        <button className="minus">−</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='padding'>
                                        {item.subtotal}</div></td>
                                    <td>
                                        <button className='remove'>{item.remove}</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="second-section">
                    <div className="coupon-container col-12 col-md-6">
                        <label className="coupon-label">Coupon:</label>
                        <div className="input-wrapper">
                            <input type="text" placeholder="Enter Coupon Code" className="coupon-input" />
                            <button className="apply-button">Apply</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="update-cart">
                            <button className="apply-button">Update Cart</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="subtotal-container">
                            <h2 className="subtotal-heading">Subtotal</h2>
                            <hr className="divider" />

                            <div className="subtotal-item">
                                <span>Subtotal</span>
                                <span className="price">$999.00</span>
                            </div>

                            <div className="subtotal-item">
                                <span>Shipping Fee</span>
                                <span className="price">$15.00</span>
                            </div>

                            <div className="subtotal-item total">
                                <span>Total</span>
                                <span className="price">$999.00</span>
                            </div>

                            <button className="checkout-button">CHECKOUT</button>
                        </div>
                    </div>

                </div>
            </div>
            

        </>
    );
};


export default Cart;
