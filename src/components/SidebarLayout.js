import React, { useEffect, useRef } from 'react';
import './SidebarLayout.css';

const SidebarLayout = ({ sidebar, content, isSidebarOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        toggleSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen, toggleSidebar]);

  return (
    <div className="layout-container">
      <div
        ref={sidebarRef}
        className={`sidebar-wrapper ${isSidebarOpen ? 'visible' : ''}`}
      >
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        {sidebar}
      </div>
      <div className={`content-wrapper ${isSidebarOpen ? 'shifted' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default SidebarLayout;








