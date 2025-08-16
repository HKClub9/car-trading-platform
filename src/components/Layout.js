import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="layout-content">
        <div className="page-wrapper">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;



