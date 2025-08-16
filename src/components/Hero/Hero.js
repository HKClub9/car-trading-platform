import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div
      className="hero-banner"
      style={{ backgroundImage: "url('/images/showroom.jpg')" }}
    >
      <div className="hero-banner__content">
        <h1>歡迎來到我們的陳列室</h1>
        <p>探索精心挑選的豪華車款，為您的生活品味量身打造。</p>
        <a href="#FeaturedCars" className="hero-banner__button">立即探索</a>
      </div>
    </div>
  );
};

export default Hero;





