import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
const Home = () => {
  const homeRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (homeRef.current.scrollTop > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (homeRef.current) {
      homeRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (homeRef.current) {
        homeRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div ref={homeRef} className='HomePage'>
      
    </div>
  )
}

export default Home
