import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import blog1 from "../../assets/blog-img-1.jpg";
import blog2 from "../../assets/blog-img-2.jpg";
import blog3 from "../../assets/blog-img-3.jpg";
import breadcrumber from "../../assets/breadcrumb-bg.jpg";
import recentPost1 from "../../assets/recent-post-1.jpg";
import recentPost2 from "../../assets/recent-post-2.jpg";
import recentPost3 from "../../assets/recent-post-3.jpg";
import "../blogs/blogs.css";

const Blogs = () => {
  const blogImages = [blog1, blog2, blog3];

  return (
    <>
      <div className="firstaboutres">
        <img src={breadcrumber} alt="" />
        <div className="aboutrescontent">
          <div className="aboutreshead">
            <h1>BLOG</h1>
            <div className="flexaboutrescontent">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  paddingRight: "1vw",
                }}
              >
                <p>Home /</p>
              </Link>
              <p style={{ color: "red" }}>Blog</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blogs-details-container">
        <div className="blogs-content">
          {blogImages.map((image, index) => (
            <div
              key={index}
              className="blogs-card"
              style={{ marginBottom: "5px" }}
            >
              <div className="blogs-date">
                <span>15</span>
                <small>Dec</small>
              </div>
              <img src={image} alt="Blogs" className="blogs-image" />
              <div className="blogs-info">
                <span>By Admin</span>
                <span>🗨 2 Comments</span>
              </div>
              <h2 className="blogs-title">
                Supervisor Disapproved of Latest Work
              </h2>
              <p className="blogs-description">
                Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus
                in magna ut orci malesuada the sollicitudin. Aenean faucibus
                scelerisque convallis. Quisque interdum mauris id nunc molestie
                tincidunt erat gravida. Nullam dui libero, mollis ac quam et,
                venenatis.
              </p>
              <div className="button" id="blogButton">
                <button>
                  Order now <BsArrowRightSquareFill size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

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
              <li>
                Breakfast<span>(08)</span>
              </li>
              <li>
                Restaurant<span>(11)</span>
              </li>
              <li>
                Dinner<span>(18)</span>
              </li>
              <li>
                Fast Food<span>(11)</span>
              </li>
              <li>
                Lunch<span>(07)</span>
              </li>
            </ul>
          </div>

          <div className="recent-posts">
            <h3>Recent Posts</h3>
            <ul>
              <li>
                <img src={recentPost1} alt="Recent Post 1" />
                <div>
                  <span className="post-date">📅 May 12, 2025</span>
                  <p>There are many variations of passages.</p>
                </div>
              </li>
              <li>
                <img src={recentPost2} alt="Recent Post 2" />
                <div>
                  <span className="post-date">📅 May 12, 2025</span>
                  <p>There are many variations of passages.</p>
                </div>
              </li>
              <li>
                <img src={recentPost3} alt="Recent Post 3" />
                <div>
                  <span className="post-date">📅 May 12, 2025</span>
                  <p>There are many variations of passages.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="tags">
            <h3>Tags</h3>
            <div className="tag-list">
              <span>Marketing</span>
              <span>SEO</span>
              <span>Design</span>
              <span>Technology</span>
              <span>Development</span>
              <span>Branding</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
