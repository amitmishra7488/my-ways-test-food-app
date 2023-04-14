import React, { useEffect, useState } from "react";


export default function FoodItem() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const storedFoods = JSON.parse(localStorage.getItem("foods") || "[]");
        setFoods(storedFoods);
    }, []);

    const [filterType, setFilterType] = useState("");
    const [filterTime, setFilterTime] = useState("");

    const filteredFoods = foods.filter((food) => {
        const passesTypeFilter = filterType ? food.type === filterType : true;
        const passesTimeFilter = filterTime ? food.deliveryTime <= filterTime : true;
        return passesTypeFilter && passesTimeFilter;
    });

    return (
        <div className="food-list">
            <div className="filter-form">
                <label>
                    Filter by Type:
                    <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
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
                    <input type="number" value={filterTime} onChange={(e) => setFilterTime(e.target.value)} />
                </label>
            </div>
            {filteredFoods.length > 0 ?
                filteredFoods.map((el) => {
                    return (
                        <div className="food-item">

                            <h2>{el.foodNname}</h2>
                            <p>Type: {el.foodType}</p>
                            <p>Delivery Time: {el.maxDdeliveryTime} minutes</p>
                        </div>
                    )
                })
                : (
                    <p>No matching foods found.</p>
                )}
        </div>
    );
}
