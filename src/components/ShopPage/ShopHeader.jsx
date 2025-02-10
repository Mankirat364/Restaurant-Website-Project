import React from 'react'
import './ShopHeader.css'
const ShopHeader = ({ title, breadcrumb }) => {
  return (
    <div className="shopBgImage">
      <div className="shopText">
        <h1>{title}</h1>
        <p>Home / <span>{breadcrumb}</span></p>
      </div>
    </div>
  );
}
export default ShopHeader;
