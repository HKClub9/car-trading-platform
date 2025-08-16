import React, { useState } from 'react';
import SidebarLayout from './SidebarLayout';
import FilterSidebar from './FilterSidebar';
import CarsContent from './CarsContent';
import './CarsPage.css';

const CarsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev); // toggles open/close
  };

  return (
    <div className="cars-page">
      {/* Filter Button */}
      <button className="filter-toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close Filters' : 'Open Filters'}
      </button>

      {/* Layout with Sidebar and Content */}
      <SidebarLayout
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        sidebar={<FilterSidebar />}
        content={<CarsContent />}
      />
    </div>
  );
};

export default CarsPage;

