import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <footer className={`footer ${visible ? 'visible' : 'hidden'}`}>
      <i className="fas fa-car"></i>
      <p>© 2025 成功車行. 保留所有權利。</p>
    </footer>
  );
};

export default Footer;


