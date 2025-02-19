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
import reviewImg_2 from "../../../assets/reviewer-img-2.png";
import shopdetails from "../../../assets/shop-details.png";
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
              Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des
              mauris commodo venenatis ligula commodo leez sed blandit convallis
              dignissim onec vel pellentesque neque.S
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
            Neque porro est qui dolorem ipsum quia quaed inventor veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
            lacus quis enim var sed efficitur turpis gilla sed sit amet finibus
            eros. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. <br />
            <br />
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged. Aelltes port lacus quis enim var sed efficitur turpis
            gilla sed sit amet finibus eros. Neque porro est qui dolorem ipsum
            quia quaed inventor veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Aelltes port lacus quis enim var sed efficitur
            turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </p>
        </div>
        <hr />

        <div className="description-review">
          <h4>02 Reviews</h4>
          <div className="reviewer">
            <div className="name">
              <img className="" src={reviewImg_2} alt="" />
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
              Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla.
              Integer non quam commodo, scelerisque felis id, eleifend turpis.
              Phasellus in nulla quis erat tempor tristique eget vel purus.
              Nulla pharetra pharetra pharetra. Praesent varius eget justo ut
              lacinia. Phasellus pharetra, velit viverra lacinia consequat,
              ipsum odio mollis dolor, nec facilisis arcu arcu ultricies sapien.
              Quisque ut dapibus nunc. Vivamus sit amet efficitur velit.
              Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla
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
              Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla.
              Integer non quam commodo, scelerisque felis id, eleifend turpis.
              Phasellus in nulla quis erat tempor tristique eget vel purus.
              Nulla pharetra pharetra pharetra. Praesent varius eget justo ut
              lacinia. Phasellus pharetra, velit viverra lacinia consequat,
              ipsum odio mollis dolor, nec facilisis arcu arcu ultricies sapien.
              Quisque ut dapibus nunc. Vivamus sit amet efficitur velit.
              Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla
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
