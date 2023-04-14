import React, { useState } from 'react';
import "../styles/foodform.css"
const foodTypes = ['Delicious Food', 'Nutritious Food', 'Fast Food', 'Beverages', 'Desserts'];

const FoodForm = () => {
  const [foodName, setFoodName] = useState('');
  const [foodType, setFoodType] = useState(foodTypes[0]);
  const [maxDeliveryTime, setMaxDeliveryTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const food = { foodName, foodType, maxDeliveryTime };
    localStorage.setItem('food', JSON.stringify(food));
    setFoodName('');
    setFoodType(foodTypes[0]);
    setMaxDeliveryTime('');
  };

  return (
    <form className='foodForm' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="foodName">Food Name:</label>
        <input
          type="text"
          id="foodName"
          value={foodName}
          onChange={(event) => setFoodName(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="foodType">Food Type:</label>
        <select
          id="foodType"
          value={foodType}
          onChange={(event) => setFoodType(event.target.value)}
          required
        >
          {foodTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="maxDeliveryTime">Max Delivery Time:</label>
        <input
          type="number"
          id="maxDeliveryTime"
          value={maxDeliveryTime}
          onChange={(event) => setMaxDeliveryTime(event.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FoodForm;
