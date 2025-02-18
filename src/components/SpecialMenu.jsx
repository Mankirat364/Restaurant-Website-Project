import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoFastFoodSharp } from "react-icons/io5";
import "./SpecialMenu.css";

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
    { id: 1, name: "Burger", price: "$10.99", img: "burger.png" },
    { id: 2, name: "French Fries", price: "$5.99", img: "fries.png" },
    { id: 3, name: "Burger", price: "$10.99", img: "burger.png" },
    { id: 4, name: "French Fries", price: "$5.99", img: "fries.png" },
    { id: 5, name: "Burger", price: "$10.99", img: "burger.png" },
    { id: 6, name: "French Fries", price: "$5.99", img: "fries.png" },
    { id: 7, name: "French Fries", price: "$5.99", img: "fries.png" },
    { id: 8, name: "French Fries", price: "$5.99", img: "fries.png" },
  ],
  "Drink & Juice": [
    { id: 9, name: "Orange Juice", price: "$4.99", img: "juice.png" },
    { id: 10, name: "Coca Cola", price: "$2.99", img: "coke.png" },
    { id: 11, name: "Orange Juice", price: "$4.99", img: "juice.png" },
    { id: 12, name: "Coca Cola", price: "$2.99", img: "coke.png" },
    { id: 13, name: "Orange Juice", price: "$4.99", img: "juice.png" },
    { id: 14, name: "Coca Cola", price: "$2.99", img: "coke.png" },
    { id: 15, name: "Orange Juice", price: "$4.99", img: "juice.png" },
    { id: 16, name: "Coca Cola", price: "$2.99", img: "coke.png" },
  ],
  "Chicken Pizza": [
    { id: 17, name: "BBQ Chicken Pizza", price: "$12.99", img: "pizza.png" },
    { id: 18, name: "Spicy Chicken Pizza", price: "$13.99", img: "spicy_pizza.png" },
    { id: 19, name: "BBQ Chicken Pizza", price: "$12.99", img: "pizza.png" },
    { id: 20, name: "Spicy Chicken Pizza", price: "$13.99", img: "spicy_pizza.png" },
    { id: 21, name: "BBQ Chicken Pizza", price: "$12.99", img: "pizza.png" },
    { id: 22, name: "Spicy Chicken Pizza", price: "$13.99", img: "spicy_pizza.png" },
    { id: 23, name: "BBQ Chicken Pizza", price: "$12.99", img: "pizza.png" },
    { id: 24, name: "Spicy Chicken Pizza", price: "$13.99", img: "spicy_pizza.png" },
  ],
  "Fresh Pasta": [
    { id: 25, name: "Italian Pasta", price: "$14.99", img: "pasta.png" },
    { id: 26, name: "Penne Alfredo", price: "$11.99", img: "alfredo.png" },
    { id: 27, name: "Italian Pasta", price: "$14.99", img: "pasta.png" },
    { id: 28, name: "Penne Alfredo", price: "$11.99", img: "alfredo.png" },
    { id: 29, name: "Italian Pasta", price: "$14.99", img: "pasta.png" },
    { id: 30, name: "Penne Alfredo", price: "$11.99", img: "alfredo.png" },
    { id: 31, name: "Italian Pasta", price: "$14.99", img: "pasta.png" },
    { id: 32, name: "Penne Alfredo", price: "$11.99", img: "alfredo.png" },
  ],    
};

const SpecialMenu = () => {
  const [activeCategory, setActiveCategory] = useState("Fast Food");

  return (
    <div className="specialMenu">
      {/* Header */}
      <div className="specmenuheading">
        <p>
          <IoFastFoodSharp /> OUR SPECIAL MENU <IoFastFoodSharp />
        </p>
      </div>

      {/* Scrolling Marquee */}
      <div className="marqueeWrapper">
        <motion.div
          className="marqueeAnimation"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...menuItems, ...menuItems].map((item, index) => (
            <span
              className={`marqueeItem ${index % 2 === 0 ? "outlineText" : ""}`}
              key={index}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

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
              <div className="foodItem" key={item.id}>
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
  );
};

export default SpecialMenu;
