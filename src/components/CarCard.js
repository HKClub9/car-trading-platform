import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarCard.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


function CarCard({ car }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="car-card">
      <div className="car-images">
        {Array.isArray(car.images) && car.images.length > 0 ? (
          <Carousel
            showThumbs={false}
            infiniteLoop
            useKeyboardArrows
            swipeable
            emulateTouch
            autoPlay={false}
            showStatus={false}
            showIndicators={true}
          >
            {car.images.map((img, index) => (
              <div key={index} className="car-image-wrapper">
                <img
                  src={img}
                  alt={`${car.brand} ${car.model} - view ${index + 1}`}
                  className="car-image"
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="car-image-wrapper">
            <img
              src="https://via.placeholder.com/300x200?text=No+Image"
              alt="No visual available for this car"
              className="car-image"
            />
          </div>
        )}
      </div>

      <h3>{car.brand} {car.model}</h3>
      <p>年份：{car.year}</p>
      <p>價格：HK${car.price.toLocaleString()}</p>

      <button onClick={() => addToCart(car)} className="cta-button">
        加入購物車
      </button>
    </div>
  );
}

export default CarCard;


