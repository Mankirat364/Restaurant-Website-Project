// {
//   /* Sidebar */
// }
// <div className="blog-sidebar">
//   <div className="search-bar">
//     <h3>Search</h3>
//     <div className="search-box">
//       <input type="text" placeholder="Search Here" />
//       <button>🔍</button>
//     </div>
//   </div>

//   <div className="categories">
//     <h3>Categories</h3>
//     <ul>
//       <li>
//         Product Presentation <span>(08)</span>
//       </li>
//       <li>
//         Dedicated Video Call <span>(11)</span>
//       </li>
//       <li>
//         Trending Challenge <span>(18)</span>
//       </li>
//       <li>
//         Dance Awareness <span>(11)</span>
//       </li>
//       <li>
//         Photography <span>(07)</span>
//       </li>
//     </ul>
//   </div>
// </div>;

import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/blogs-1.png";
import blog2 from "../../assets/blogs-2.png";
import blog3 from "../../assets/blogs-3.png";
import breadcrumber from "../../assets/breadcrumb-bg.jpg";
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

      <div className="blog-details-container">
        <div className="blog-content">
          {blogImages.map((image, index) => (
            <div
              key={index}
              className="blog-card"
              style={{ marginBottom: "5px" }} // Adding margin below each card
            >
              <div className="blog-date">
                <span>15</span>
                <small>Dec</small>
              </div>
              <img src={image} alt="Blog" className="blog-image" />
              <div className="blog-info">
                <span>By Admin</span>
                <span>🗨 2 Comments</span>
              </div>
              <h2 className="blog-title">
                Supervisor Disapproved of Latest Work
              </h2>
              <p className="blog-description">
                Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus
                in magna ut orci malesuada the sollicitudin. Aenean faucibus
                scelerisque convallis. Quisque interdum mauris id nunc molestie
                tincidunt erat gravida. Nullam dui libero, mollis ac quam et,
                venenatis.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
