const fs = require('fs');

// Load original cars.json
const cars = require('./cars.json');

// Define featured car IDs (admin-only)
const featuredIds = [3, 4, 6];

// Update each car
const updatedCars = cars.map(car => {
  const condition = car.year >= 2024 ? 'new' : 'used';
  const featured = featuredIds.includes(car.id);

  return {
    ...car,
    condition,
    featured
  };
});

// Save updated file
fs.writeFileSync('./cars.updated.json', JSON.stringify(updatedCars, null, 2));
console.log('✅ cars.updated.json created successfully.');

