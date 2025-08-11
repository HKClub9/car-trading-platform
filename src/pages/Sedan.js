import React, { useEffect, useState } from 'react';
import CarCard from '../components/CarCard';
import carsData from '../data/cars.json';
import './NewCars.css';

function Sedan() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const filtered = carsData.filter(car => car.category === 'sedan');
    setCars(filtered);
  }, []);

  return (
    <div>
      <h2>轎車列表</h2>
      <div className="car-list">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
    </div>
  );
}

export default Sedan;