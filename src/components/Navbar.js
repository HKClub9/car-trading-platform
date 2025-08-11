import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLogoVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

const navItems = [
  { label: '首頁', path: '/' },
  {
    label: '新車',
    path: '/new',
    submenu: [
      { label: '轎車', path: '/new/sedan' },
      { label: 'SUV', path: '/new/suv' },
      { label: '電動車', path: '/new/ev' }
    ]
  },
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
              {item.submenu ? (
                <div className="dropdown">
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => isActive ? 'active-link' : ''}
                  >
                    {item.label}
                  </NavLink>
                  <ul className="dropdown-menu">
                    {item.submenu.map(sub => (
                      <li key={sub.label}>
                        <NavLink
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)}></div>}
      </div>
    </nav>
  );
}

export default Navbar;
