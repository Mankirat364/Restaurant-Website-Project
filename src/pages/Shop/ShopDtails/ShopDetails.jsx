import React from "react";
import "./ShopDetails.css";

import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
  FaRegHeart,
  FaYoutube,
} from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import reviewImg_2 from "../../../assets/circular_image.png";
import shopdetails from "../../../assets/pizza.jpg";
import Footer from "../../../components/Footer/Footer";
import ShopHeader from "../../../components/ShopPage/ShopHeader";

const ShopDetails = () => {
  return (
    <>
      <ShopHeader title="SHOP DETAILS" breadcrumb="Shop Details" />
      <div className="container mt-md-5 pt-md-5 shop-details-page">
        <div className="row">
          <div className="col-12 col-md-6 left-section">
            <div className="shopdetails-bg">
              <img className="shop-details-image" src={shopdetails} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 right-section">
            <div className="item-name-price">
              <h5>Chicken Pizza</h5>
              <h2>$69</h2>
            </div>
            <div className="star-rating">
              <span className="star" data-value="1">
                &#9733;
              </span>
              <span className="star" data-value="2">
                &#9733;
              </span>
              <span className="star" data-value="3">
                &#9733;
              </span>
              <span className="star" data-value="4">
                &#9733;
              </span>
              <span className="star" data-value="5">
                &#9733;
              </span>
              <span className="review">(2 Customer Reviews)</span>
            </div>

            <hr />
            <p className="details-para">
            Crafted with precision and innovation, this product redefines quality and excellence. Designed to cater to your needs, it combines durability, style, and efficiency. Whether for everyday use or special occasions, its superior craftsmanship ensures a seamless experience. Made from high-quality materials.
            </p>

            <div className="container">
              <div className="col-12 col-md-6">
                <div class="quantity-container">
                  <label for="quantity">Quantity</label>
                  <div class="quantity">
                    <input type="text" id="quantity" value="1" readonly />
                    <div class="buttons">
                      <button class="plus">+</button>
                      <button class="minus">−</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="button-group">
              <button className="cart-btn">
                ADD TO CART <IoCart />
              </button>
              <button className="wishlist-btn">
                <FaRegHeart />
                ADD TO WISHLIST
              </button>
            </div>
            <div className="shop-details">
           
              <div className="shop-detail">
                <div className="shop-details-icons">
                  <FaFacebookF />
                </div>
                <div className="shop-details-icons">
                  <FaInstagramSquare />
                </div>
                <div className="shop-details-icons">
                  <FaYoutube />
                </div>
                <div className="shop-details-icons">
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-description">
          <h4>Product Description</h4>
          <p className="details-para">
          Crafted with precision and innovation, this product redefines quality and excellence. Designed to cater to your needs, it combines durability, style, and efficiency. Whether for everyday use or special occasions, its superior craftsmanship ensures a seamless experience. Made from high-quality materials, it stands the test of time while delivering unmatched performance. Elevate your lifestyle with a product that blends functionality with elegance, offering you the best in every aspect. <br />
            <br />
            Crafted with precision and innovation, this product redefines quality and excellence. Designed to cater to your needs, it combines durability, style, and efficiency. Whether for everyday use or special occasions, its superior craftsmanship ensures a seamless experience. Made from high-quality materials, it stands the test of time while delivering unmatched performance. Elevate your lifestyle with a product that blends functionality with elegance, offering you the best in every aspect.
          </p>
        </div>
        <hr />

        <div className="description-review">
          <h4>02 Reviews</h4>
          <div className="reviewer">
            <div className="name">
              <img className="image" src={reviewImg_2} alt="" />
              <div className="identity">
                <h5>Temptics Pro</h5>
                <p className="details-para">March 20, 2023 at 2:37 pm</p>
              </div>
            </div>
            <div className="star-rating">
              <span className="star" data-value="1">
                &#9733;
              </span>
              <span className="star" data-value="2">
                &#9733;
              </span>
              <span className="star" data-value="3">
                &#9733;
              </span>
              <span className="star" data-value="4">
                &#9733;
              </span>
              <span className="star" data-value="5">
                &#9733;
              </span>
            </div>
          </div>
          <div className="review-para details-para">
            <p>
            Experience excellence with our premium-quality product, crafted to meet the highest standards of innovation and design. Built with precision and care, it offers unmatched durability and performance, ensuring a seamless experience. Whether for daily use or special occasions, this product blends functionality with style, making it an essential addition to your collection. Designed for those who value quality, it promises reliability, elegance, and a touch of sophistication in every detail.
            </p>
          </div>
          <hr />
          <div className="reviewer">
            <div className="name">
              <img className="image" src={reviewImg_2} alt="" />
              <div className="identity">
                <h5>Temptics Pro</h5>
                <p className="details-para">March 20, 2023 at 2:37 pm</p>
              </div>
            </div>
            <div className="star-rating reviews-stars">
              <span className="star" data-value="1">
                &#9733;
              </span>
              <span className="star" data-value="2">
                &#9733;
              </span>
              <span className="star" data-value="3">
                &#9733;
              </span>
              <span className="star" data-value="4">
                &#9733;
              </span>
              <span className="star" data-value="5">
                &#9733;
              </span>
            </div>
          </div>
          <div className="review-para details-para">
            <p>
            Experience excellence with our premium-quality product, crafted to meet the highest standards of innovation and design. Built with precision and care, it offers unmatched durability and performance, ensuring a seamless experience. Whether for daily use or special occasions, this product blends functionality with style, making it an essential addition to your collection. Designed for those who value quality, it promises reliability, elegance, and a touch of sophistication in every detail.
            </p>
          </div>
        </div>
        <hr />
        <div className="review-form">
          <h2>Write A Review</h2>
          <p className="note">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <div className="rate-product">
            <p>Rate this product? *</p>
            <div className="product-star-rating star-rating">
              <span className="star" data-value="1">
                &#9733;
              </span>
              <span className="star" data-value="2">
                &#9733;
              </span>
              <span className="star" data-value="3">
                &#9733;
              </span>
              <span className="star" data-value="4">
                &#9733;
              </span>
              <span className="star" data-value="5">
                &#9733;
              </span>
            </div>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Your Name"
              className="input-field"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input-field"
            />
          </div>

          <textarea
            placeholder="Your Review"
            className="review-textarea"
          ></textarea>

          <button className="cart-btn">POST REVIEW</button>
        </div>
      </div>
   
    </>
  );
};

export default ShopDetails;
