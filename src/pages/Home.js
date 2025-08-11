import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import FeaturedCars from '../components/FeaturedCars';
import Testimonials from '../components/Testimonials';



const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Services />
      <FeaturedCars />
      <Testimonials />
    </div>
  );
};


export default Home;

