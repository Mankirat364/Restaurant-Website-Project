import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoFastFoodSharp } from "react-icons/io5";
import "./SpecialMenu.css";

const menuItems = [
  "CLASSIC BURGER",
  "PEPPERONI PIZZA",
  "BBQ GRILLED CHICKEN",
  "CREAMY ALFREDO PASTA",
  "TURKEY CLUB SANDWICH",
  "SPICY TACOS",
  "FRESH GARDEN SALAD",
  "AUTHENTIC JAPANESE SUSHI",
];


const categories = ["Fast Food", "Drink & Juice", "Chicken Pizza", "Fresh Pasta"];

const allMenuItems = {
  "Fast Food": [
    { id: 1, name: "Classic Cheeseburger", price: "$11.99", img: "cheese_burger.png" },
    { id: 2, name: "Crispy Onion Rings", price: "$6.49", img: "onion_rings.png" },
    { id: 3, name: "Spicy Chicken Burger", price: "$12.99", img: "spicy_chicken_burger.png" },
    { id: 4, name: "Loaded Nachos", price: "$7.99", img: "nachos.png" },
    { id: 5, name: "BBQ Bacon Burger", price: "$13.49", img: "bbq_burger.png" },
    { id: 6, name: "Garlic Parmesan Fries", price: "$6.99", img: "garlic_fries.png" },
    { id: 7, name: "Buffalo Wings", price: "$9.99", img: "buffalo_wings.png" },
    { id: 8, name: "Mozzarella Sticks", price: "$7.49", img: "mozzarella_sticks.png" },
    
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
    { id: 1, name: "Classic Cheeseburger", price: "$11.99", img: "cheese_burger.png" },
    { id: 2, name: "Crispy Onion Rings", price: "$6.49", img: "onion_rings.png" },
    { id: 3, name: "Spicy Chicken Burger", price: "$12.99", img: "spicy_chicken_burger.png" },
    { id: 4, name: "Loaded Nachos", price: "$7.99", img: "nachos.png" },
    { id: 5, name: "BBQ Bacon Burger", price: "$13.49", img: "bbq_burger.png" },
    { id: 6, name: "Garlic Parmesan Fries", price: "$6.99", img: "garlic_fries.png" },
    { id: 7, name: "Buffalo Wings", price: "$9.99", img: "buffalo_wings.png" },
    { id: 8, name: "Mozzarella Sticks", price: "$7.49", img: "mozzarella_sticks.png" },
    
  ],
  "Fresh Pasta": [
    { id: 25, name: "Spaghetti Carbonara", price: "$13.99", img: "carbonara.png" },
    { id: 26, name: "Penne Arrabbiata", price: "$12.49", img: "arrabbiata.png" },
    { id: 27, name: "Fettuccine Alfredo", price: "$14.99", img: "fettuccine_alfredo.png" },
    { id: 28, name: "Creamy Pesto Pasta", price: "$13.49", img: "pesto_pasta.png" },
    { id: 29, name: "Lobster Ravioli", price: "$16.99", img: "lobster_ravioli.png" },
    { id: 30, name: "Mushroom Truffle Pasta", price: "$15.49", img: "truffle_pasta.png" },
    { id: 31, name: "Four Cheese Gnocchi", price: "$13.99", img: "gnocchi.png" },
    { id: 32, name: "Tomato Basil Linguine", price: "$12.99", img: "linguine.png" },
    
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
