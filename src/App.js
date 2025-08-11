import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page components
import Home from './pages/Home';
import NewCars from './pages/NewCars';
import Sedan from './pages/Sedan';
import SUV from './pages/SUV';
import EV from './pages/EV';
import UsedCars from './pages/UsedCars';
import SellCar from './pages/Sell';
import Contact from './pages/Contact';

// Scroll-to-top helper
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewCars />} />
        <Route path="/new/sedan" element={<Sedan />} />
        <Route path="/new/suv" element={<SUV />} />
        <Route path="/new/ev" element={<EV />} />
        <Route path="/used" element={<UsedCars />} />
        <Route path="/sell" element={<SellCar />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
