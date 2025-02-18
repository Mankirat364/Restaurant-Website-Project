import React, { useState } from "react";
import food_1 from '../../assets/food-1.png';
import food_2 from '../../assets/food-2.png';
import food_3 from '../../assets/food-3.png';
import { BsCartFill } from "react-icons/bs";
import './Menu.css'
const Menu = () => {
    const menuItems = [
        "BURGER",
        "CHICKEN PIZZA",
        "GRILLED CHICKEN",
        "PASTA",
        "SANDWICH",
        "TACOS",
        "SALADS",
        "SUSHI",
      ];
      
      const categories = ["Fast Food", "Drink & Juice", "Chicken Pizza", "Fresh Pasta"];
      
      const allMenuItems = {
        "Fast Food": [
          { id: 1, name: "Burger", price: "$10.99", img:  food_1 },
          { id: 2, name: "French Fries", price: "$5.99", img: food_2 },
          { id: 3, name: "Burger", price: "$10.99", img:  food_1 },
          { id: 4, name: "French Fries", price: "$5.99", img: food_2 },
          { id: 5, name: "Burger", price: "$10.99", img:  food_1 },
          { id: 6, name: "French Fries", price: "$5.99", img: food_2 },
          { id: 7, name: "French Fries", price: "$5.99", img: food_2 },
          { id: 8, name: "French Fries", price: "$5.99", img: food_2 },
        ],
        "Drink & Juice": [
          { id: 9, name: "Orange Juice", price: "$4.99", img: food_3 },
          { id: 10, name: "Coca Cola", price: "$2.99", img: food_1 },
          { id: 11, name: "Orange Juice", price: "$4.99", img: food_3 },
          { id: 12, name: "Coca Cola", price: "$2.99", img: food_1 },
          { id: 13, name: "Orange Juice", price: "$4.99", img: food_3 },
          { id: 14, name: "Coca Cola", price: "$2.99", img: food_1 },
          { id: 15, name: "Orange Juice", price: "$4.99", img: food_3 },
          { id: 16, name: "Coca Cola", price: "$2.99", img: food_1 },
        ],
        "Chicken Pizza": [
          { id: 17, name: "BBQ Chicken Pizza", price: "$12.99", img: food_3 },
          { id: 18, name: "Spicy Chicken Pizza", price: "$13.99", img: food_1 },
          { id: 19, name: "BBQ Chicken Pizza", price: "$12.99", img: food_3 },
          { id: 20, name: "Spicy Chicken Pizza", price: "$13.99", img: food_1 },
          { id: 21, name: "BBQ Chicken Pizza", price: "$12.99", img: food_3 },
          { id: 22, name: "Spicy Chicken Pizza", price: "$13.99", img: food_1 },
          { id: 23, name: "BBQ Chicken Pizza", price: "$12.99", img: food_3 },
          { id: 24, name: "Spicy Chicken Pizza", price: "$13.99", img: food_1 },
        ],
        "Fresh Pasta": [
          { id: 25, name: "Italian Pasta", price: "$14.99", img: food_2 },
          { id: 26, name: "Penne Alfredo", price: "$11.99", img: food_3 },
          { id: 27, name: "Italian Pasta", price: "$14.99", img: food_2 },
          { id: 28, name: "Penne Alfredo", price: "$11.99", img: food_3 },
          { id: 29, name: "Italian Pasta", price: "$14.99", img: food_2 },
          { id: 30, name: "Penne Alfredo", price: "$11.99", img: food_3 },
          { id: 31, name: "Italian Pasta", price: "$14.99", img: food_2 },
          { id: 32, name: "Penne Alfredo", price: "$11.99", img: food_3 },
        ],    
      };

        const [activeCategory, setActiveCategory] = useState("Fast Food");
  return (
   <>
       <div className="">

      {/* Category Selection & Food List */}
      <div className="foodchoice">
        <div className="specialMen2">
          {/* Category Tabs */}
          <div className="categoryTabs">
            {categories.map((category, index) => (
              <button
                key={index}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        
          {/* Food List (Dynamically Updates) */}
          <div className="foodList">
            {allMenuItems[activeCategory].map((item) => (
              <div className="menu" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="foodDetails">
                  <h3>{item.name}</h3>
                  <p>It's a testament to our.</p>
                </div>
                <span className="foodPrice">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Menu
