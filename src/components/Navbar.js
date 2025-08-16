import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    const timer = setTimeout(() => setLogoVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const navItems = [
    { label: '首頁', path: '/' },
    { label: '新車', path: '/new' }, // ✅ Submenu removed
    { label: '二手車', path: '/used' },
    { label: '我要賣車', path: '/sell' },
    { label: '聯絡我們', path: '/contact' }
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className={`brand ${logoVisible ? 'fade-in' : ''}`}>
          <NavLink to="/" className="logo-link" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="成功車行 Logo" className="navbar-logo" />
          </NavLink>
        </div>

        <button
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <li
              key={item.label}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={isOpen ? 'slide-in' : ''}
            >
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/cart" className="cart-link" onClick={() => setIsOpen(false)}>
          <i className="fas fa-shopping-cart"></i>
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </NavLink>

        {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
      </div>
    </nav>
  );
}

export default Navbar;




