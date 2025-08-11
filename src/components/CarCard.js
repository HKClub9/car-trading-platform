import React from 'react';

function CarCard({ car }) {
  return (
    <div className="car-card">
      <div className="car-images">
        {Array.isArray(car.images) && car.images.length > 0 ? (
          <>
            {car.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${car.brand} ${car.model} ${index + 1}`}
              />
            ))}
          </>
        ) : (
          <img
            src="https://via.placeholder.com/300x200?text=No+Image"
            alt="No image available"
          />
        )}
      </div>

      <h3>{car.brand} {car.model}</h3>
      <p>年份：{car.year}</p>
      <p>價格：HK${car.price.toLocaleString()}</p>
    </div>
  );
}

export default CarCard;

