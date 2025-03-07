import React from 'react';
import { motion } from 'framer-motion';
import './Video.css';
import videoimage from '../assets/video-cover.jpg';
import { FaPlay } from "react-icons/fa";

const Video = () => {
  return (
    <motion.div 
      className='videosection'
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="videocontainer">
        <div className="videodiv">
          <div className="imagevideodiv">
            <img src={videoimage} alt="Video Thumbnail" />
            <div className="play-button">
              {/* Rotating Circular Text */}
              <svg className="rotating-text" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                <text>
                  <textPath href="#circlePath" startOffset="50%">
                    {/* PLAY VIDEO • PLAY VIDEO • PLAY VIDEO • PLAY VIDEO */}
                  </textPath>
                </text>
              </svg>
              <FaPlay className="play-icon" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Video;
