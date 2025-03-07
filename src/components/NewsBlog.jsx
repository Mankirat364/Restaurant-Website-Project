import React from 'react';
import './News.css';
import { IoFastFoodSharp } from 'react-icons/io5';
import blog1 from '../assets/blog-1.jpg';
import blog2 from '../assets/blog-2.jpg';
import blog3 from '../assets/blog-3.jpg';
import Slider from 'react-slick';
import logo1 from '../assets/partner-4.png'
import logo2 from '../assets/partner-4.png'
import logo3 from '../assets/partner-4.png'
import logo4 from '../assets/partner-4.png'
const NewsBlog = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3 }
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 2 }
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 1 }
          }
        ]
      };
    
  return (
    <div className='newsBlogSection'>
    <div className='newsHeader'>
      <IoFastFoodSharp className='newsIcon' />
      <span className='newsTitle'>LATEST UPDATES & ARTICLES</span>
      <h2>Stay Informed with Our News & Events</h2>
    </div>
    <div className='newsCards'>
      <div className='newsCard'>
        <img src={blog1} alt='News 1' className='newsImage' />
        <div className='newsContent'>
          <span className='newsDate'>29 July 2024</span>
          <span className='newsCategory'>By Admin | Recipes</span>
          <h4>Exploring the Secrets Behind the Perfect Cheese Pizza</h4>
          <a href='#' className='readMore'>Read More →</a>
        </div>
      </div>
      <div className='newsCard'>
        <img src={blog2} alt='News 2' className='newsImage' />
        <div className='newsContent'>
          <span className='newsDate'>29 July 2024</span>
          <span className='newsCategory'>By Admin | New Dishes</span>
          <h4>Discover the Magic of Our New Chicken Strips Recipe</h4>
          <a href='#' className='readMore'>Read More →</a>
        </div>
      </div>
      <div className='newsCard'>
        <img src={blog3} alt='News 3' className='newsImage' />
        <div className='newsContent'>
          <span className='newsDate'>29 July 2024</span>
          <span className='newsCategory'>By Admin | Food Trends</span>
          <h4>Why Cheese Pizza Continues to Be a Fan Favorite</h4>
          <a href='#' className='readMore'>Read More →</a>
        </div>
      </div>
    </div>
  
  
      {/* <Slider {...settings} className='logoSlider'>
        <div className='slideItem'><img src={logo1} alt="Logo 1" /></div>
        <div className='slideItem'><img src={logo2} alt="Logo 2" /></div>
        <div className='slideItem'><img src={logo3} alt="Logo 3" /></div>
        <div className='slideItem'><img src={logo4} alt="Logo 4" /></div>
      </Slider> */}
    </div>
  );
};

export default NewsBlog;