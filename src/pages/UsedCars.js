import React, { useEffect, useState } from 'react';
import './UsedCars.css';
import CarCard from '../components/CarCard';
import carsData from '../data/cars.json';

function UsedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const filtered = carsData.filter(car => car.year < 2022);
    setCars(filtered);
  }, []);

  return (
    <div>
      <h2>二手車列表</h2>
      <div className="car-list">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
    </div>
  );
}

export default UsedCars;