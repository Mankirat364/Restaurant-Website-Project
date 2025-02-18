import React from 'react'
import './Page.css'
import ShopHeader from '../../components/ShopPage/ShopHeader';
import Menu from '../../components/Menu/Menu';



const Pages = () => {
  

  return (
    <>
      <ShopHeader title="MENU STYLE 1" breadcrumb="Menu Style 1" />
     
          <Menu/>
      
    </>
  )
}

export default Pages
