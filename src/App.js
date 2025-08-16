import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Page components
import Home from './pages/Home';
import NewCars from './pages/NewCars';
import UsedCars from './pages/UsedCars';
import SellCar from './pages/Sell';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './pages/Checkout'
import Confirmation from './pages/Confirmation';



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
    <CartProvider>
      {/* <Router> */}
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewCars />} />
            <Route path="/used" element={<UsedCars />} />
            <Route path="/sell" element={<SellCar />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </Layout>
      {/* </Router> */}
    </CartProvider>
  );
}

export default App;



