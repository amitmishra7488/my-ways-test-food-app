import React, { useEffect, useState } from "react";

export default function FoodItem() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const storedFoods = JSON.parse(localStorage.getItem("food") || "[]");
        setFoods(storedFoods);
    }, []);

    const [filterType, setFilterType] = useState("");
    const [filterTime, setFilterTime] = useState("");

    const filteredFoods = foods.filter((food) => {
        const passesTypeFilter = filterType ? food.foodType === filterType : true;
        const passesTimeFilter = filterTime ? food.maxDeliveryTime <= filterTime : true;
        return passesTypeFilter && passesTimeFilter;
    });

    return (
        <div className="food-list">
            <div className="filter-form">
                <label>
                    Filter by Type:
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Delicious Food">Delicious Food</option>
                        <option value="Nutritious Food">Nutritious Food</option>
                        <option value="Fast Food">Fast Food</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Desserts">Desserts</option>
                    </select>
                </label>
                <label>
                    Filter by Delivery Time:
                    <input
                        type="number"
                        value={filterTime}
                        onChange={(e) => setFilterTime(e.target.value)}
                    />
                </label>
            </div>
            {filteredFoods.length > 0 ? (
                filteredFoods.map((food) => {
                    return (
                        <div className="food-item" key={food.foodName}>
                            <div>
                                <h2>{food.foodName}</h2>
                                <p>Type: {food.foodType}</p>
                                <p>Delivery Time: {food.maxDeliveryTime} minutes</p>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>No matching foods found.</p>
            )}
        </div>
    );
}
