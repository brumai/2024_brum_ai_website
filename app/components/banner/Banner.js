import React from 'react';
import "./banner.css";
// import banner from './assets/cityphoto';
import Image from 'next/image';
import Button from 'app/components/banner/Button.js'

{/* <div className="banner">
  <img src={banner} alt="Banner" />
  <div className="banner-content">
      <h1>aGuideHub</h1>
      <p>Welcome To aGuideHub! </p>
  </div>
</div> */}

const Banner = () => {
    return (
      <div className="bg-[url('/assets/cityphoto.png')] bg-cover bg-center w-screen h-96">
      <Image src="/assets/banner_content.png" width="500" height="250" alt="Banner" className="mt-16 ml-12"/>
  
      <Button />

      </div>
    );
  }
  
  export default Banner;