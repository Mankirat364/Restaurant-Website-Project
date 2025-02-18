import React from 'react'
import '../BlogDetails/BlogDetails.css'
import breadcrumber from '../../assets/breadcrumb-bg.jpg';
import blogimg from '../../assets/blog-1.png'
import { Link } from 'react-router-dom';
import recentPost1 from "../../assets/recent-post-1.jpg";
import recentPost2 from "../../assets/recent-post-2.jpg";
import recentPost3 from "../../assets/recent-post-3.jpg";
import blogExtra1 from "../../assets/blog-extra-1.jpg";
import blogExtra2 from "../../assets/blog-extra-2.jpg";
const BlogDetails = () => {
  return (
    <div>
   <div className="firstaboutres">
        <img src={breadcrumber} alt="" />
        <div className="aboutrescontent">
          <div className="aboutreshead">
            <h1>BLOG DETAILS</h1>
            <div className="flexaboutrescontent">
              <Link to="/" style={{ textDecoration: "none", color: "white", paddingRight: "1vw" }}>
                <p>Home /</p>
              </Link>
              <p style={{ color: "red" }}>Blog Details</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-details-container">
        <div className="blog-content">
          <div className="blog-card">
            <div className="blog-date">
              <span>15</span>
              <small>Dec</small>
            </div>
            <img src={blogimg} alt="Blog" className="blog-image" />
          </div>
          <div className="blog-info">
            <span>By Admin</span>
            <span>🗨 2 Comments</span>
            <span>📁 Marketing</span>
          </div>
          <h2 className="blog-title">Supervisor Disapproved of Latest Work</h2>
          <p className="blog-description">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, made of OWL
            the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
          </p>
        </div>

        {/* Sidebar */}
        <div className="blog-sidebar">
          <div className="search-bar">
            <h3>Search</h3>
            <div className="search-box">
              <input type="text" placeholder="Search Here" />
              <button>🔍</button>
            </div>
          </div>

          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li>Product Presentation <span>(08)</span></li>
              <li>Dedicated Video Call <span>(11)</span></li>
              <li>Trending Challenge <span>(18)</span></li>
              <li>Dance Awareness <span>(11)</span></li>
              <li>Photography <span>(07)</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
