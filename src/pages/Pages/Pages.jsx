import React from 'react'
import './Page.css'
import ShopHeader from '../../components/ShopPage/ShopHeader';
import PagesFoodList from '../../components/PagesFoodList/PagesFoodList';

const Pages = () => {
  

  return (
    <>
      <ShopHeader title="MENU STYLE 1" breadcrumb="Menu Style 1" />
      <div className="container">
           <div className="pages-food-name">
              <button>Fast Food</button>
              <button>Drink & Juice</button>
              <button>Chicken Pizza</button>
              <button>Fresh Pasta</button>
           </div>
           <hr />
           <PagesFoodList/>
      </div>
    </>
  )
}

export default Pages
