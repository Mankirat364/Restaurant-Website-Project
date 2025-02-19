import React from 'react';
import '../BlogDetails/BlogDetails.css';
import { Link } from 'react-router-dom';
import breadcrumber from '../../assets/breadcrumb-bg.jpg';
import blogimg from '../../assets/blog-1.png';
import recentPost1 from "../../assets/recent-post-1.jpg";
import recentPost2 from "../../assets/recent-post-2.jpg";
import recentPost3 from "../../assets/recent-post-3.jpg";
import blogExtra1 from "../../assets/blog-extra-1.jpg";
import blogExtra2 from "../../assets/blog-extra-2.jpg";
import user1 from "../../assets/user1.jpg";

const BlogDetails = () => {
  return (
    <div>
      <div className="firstaboutres">
        <img src={breadcrumber} alt="Breadcrumb Background" />
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
          <p className="blog-description">
            Fusce eleifend porta arcu. In hac habitasse platea dictumst. In lacus
            libero faucibus malesuada sagittis placerat eros sed iaculis egestas augue.
          </p>

          <div className="blog-extra-images">
            <img src={blogExtra1} alt="Extra 1" />
            <img src={blogExtra2} alt="Extra 2" />
          </div>

          <p className="blog-description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident.
          </p>

          <div className="blog-quote">
            <p><strong>Pellentesque sollicitudin congue dolor non aliquam.</strong>  
            Morbi volutpat, nisi vel tincidunt tristique, nisl turpis accumsan urna.</p>
          </div>
          <div className="blog-tags-share">
            <div className="tags">
              <strong>Tags:</strong>
              <span>Reseller</span>
              <span>Hosting</span>
              <span>WP Hosting</span>
            </div>
            <div className="share">
              <strong>Share:</strong>
              <span>🔵 Facebook</span>
              <span>✖ Twitter</span>
              <span>💼 LinkedIn</span>
              <span>📸 Instagram</span>
            </div>
          </div>
          <div className="comments-section">
            <h2>02 Comments</h2>

            <div className="comment">
              <img src={user1} alt="User" className="comment-img" />
              <div className="comment-content">
                <h4>Leslie Alexander <span className="comment-date">March 20, 2023 at 2:37 pm</span></h4>
                <p>
                  Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam commodo, scelerisque felis id...
                </p>
              </div>
              <button className="reply-btn">Reply</button>
            </div>

            <div className="comment">
              <img src={user1} alt="User" className="comment-img" />
              <div className="comment-content">
                <h4>John Doe <span className="comment-date">March 22, 2023 at 10:15 am</span></h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec dignissim nulla...
                </p>
              </div>
              <button className="reply-btn">Reply</button>
            </div>

            <div className="comment-form">
              <h2>Leave a Comment</h2>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name*" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email*" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Write Message*" required></textarea>
                </div>
                <button type="submit">POST A COMMENT</button>
              </form>
            </div>
          </div>
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
              <li>Product Presentation <span>(08)</span></li>
              <li>Dedicated Video Call <span>(11)</span></li>
              <li>Trending Challenge <span>(18)</span></li>
              <li>Dance Awareness <span>(11)</span></li>
              <li>Photography <span>(07)</span></li>
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
    </div>
  );
};

export default BlogDetails;