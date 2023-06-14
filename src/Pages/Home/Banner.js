import React from 'react';
import banner from '../../images/banner-1.jpg'

const Banner = () => {
    return (
            <div className="hero min-h-screen bg-base-200 text-start">
  <div className="hero-content flex-col justify-around lg:flex-row-reverse">
    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='mx-10'>
      <h1 className="text-5xl font-bold my-16">Try The Best Education <br /> Management System (EMS)</h1>
      <button className="btn btn-primary">Contact us</button>
    </div>
  </div>
</div>

    );
};

export default Banner;