import React, { useEffect, useState } from 'react';
import CarCard from '../components/CarCard';
import carsData from '../data/cars.json';
import './NewCars.css';

function EV() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const filtered = carsData.filter(car => car.category === 'ev');
    setCars(filtered);
  }, []);

  return (
    <div>
      <h2>電動車列表</h2>
      <div className="car-list">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
    </div>
  );
}

export default EV;




