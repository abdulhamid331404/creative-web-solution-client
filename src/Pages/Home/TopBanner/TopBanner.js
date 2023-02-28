import React from 'react';
import BannerImg from '../../../assests/top-banner/01.png'
import BannerImg1 from '../../../assests/top-banner/Jahangir.png'

import './TopBanner.css'


const TopBanner = () => {
  return (
    <div className="hero top-banner bg-base-200 h-96 text-white">
      <div className="hero-content p-0 flex-col lg:flex-row-reverse ">
        <div className='ml-10'>
        <img className='h-80 mt-16 flex items-center' src={BannerImg1} alt='' />
        </div>
        <div className='w-1/2 text-left ml-2 '>
          <h1 className="text-5xl  font-bold">Hi , I'm Jahangir Alam</h1>
          <p className="text-2xl">I am <strong>MERN STACK DEVELOPER</strong>. Programming is my passion. I am developing my skills in every day.</p>
          <button className="btn btn-primary">Contact Me </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;