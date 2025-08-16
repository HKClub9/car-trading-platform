import React, { useEffect, useState } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import FilterSidebar from '../components/FilterSidebar';
import CarCard from '../components/CarCard';
import carsData from '../data/cars.json';
import './CarsPage.css';

function UsedCars() {
  const defaultFilters = {
    brand: '',
    maxPrice: '',
    minYear: '',
    category: ''
  };

  const [filters, setFilters] = useState(() => {
    const saved = localStorage.getItem('carFilters');
    return saved ? JSON.parse(saved) : defaultFilters;
  });

  const [sortOption, setSortOption] = useState(() => {
    return localStorage.getItem('carSort') || '';
  });

  const [filteredCars, setFilteredCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const carsPerPage = 6;

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  useEffect(() => {
    localStorage.setItem('carFilters', JSON.stringify(filters));
    localStorage.setItem('carSort', sortOption);

    const filtered = carsData.filter(car => {
      const isUsed = car.condition === 'used';
      const matchesBrand = filters.brand ? car.brand === filters.brand : true;
      const matchesCategory = filters.category ? car.category === filters.category : true;
      const matchesPrice = filters.maxPrice ? car.price <= parseInt(filters.maxPrice) : true;
      const matchesYear = filters.minYear ? car.year >= parseInt(filters.minYear) : true;
      return isUsed && matchesBrand && matchesCategory && matchesPrice && matchesYear;
    });
    setFilteredCars(filtered);
    setCurrentPage(1);
  }, [filters, sortOption]);

  const handleFilterChange = e => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    setSortOption('');
  };

  let sortedCars = [...filteredCars];
  if (sortOption === 'price-asc') sortedCars.sort((a, b) => a.price - b.price);
  if (sortOption === 'price-desc') sortedCars.sort((a, b) => b.price - a.price);
  if (sortOption === 'year-asc') sortedCars.sort((a, b) => a.year - b.year);
  if (sortOption === 'year-desc') sortedCars.sort((a, b) => b.year - a.year);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = sortedCars.slice(indexOfFirstCar, indexOfLastCar);

  const sidebar = (
    <FilterSidebar
      filters={filters}
      onChange={handleFilterChange}
      sortOption={sortOption}
      onSortChange={e => setSortOption(e.target.value)}
      onReset={resetFilters}
      isOpen={isSidebarOpen}
    />
  );

  const content = (
    <>
      <div className="page-header-inline">
        <h2>二手車列表</h2>
        <button className="filter-btn" onClick={toggleSidebar}>
          ☰ 篩選條件
        </button>
      </div>

      <div className="car-list">
        {currentCars.length === 0 ? (
          <p>目前沒有符合條件的二手車。</p>
        ) : (
          currentCars.map(car => <CarCard key={car.id} car={car} />)
        )}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(sortedCars.length / carsPerPage) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? 'active-page' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );

  return (
    <SidebarLayout
      isSidebarOpen={isSidebarOpen}
      toggleSidebar={toggleSidebar}
      sidebar={sidebar}
      content={content}
    />
  );
}

export default UsedCars;
















