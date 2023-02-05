import React from "react";
import { meals } from "../assets/data";
import Meal from "./Meal";

function Meals() {
  return (
    <section className="section-meals" id="meals">
      <div className="container text-center">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <div className="container grid grid-3-cols margin-bottom-md">
        {meals.map((meal) => {
          return <Meal key={meal.id} {...meal} />;
        })}
        <div className="diets">
          <h3 className="heading-tertiary">Works with any diet:</h3>
          <ul className="list">
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>Vegetarian</span>
            </li>
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>Vegan</span>
            </li>
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>Pescatarian</span>
            </li>
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>Gluten-free</span>
            </li>
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>Lactose-free</span>
            </li>
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>Keto</span>
            </li>
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>Paleo</span>
            </li>
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>Low FODMAP</span>
            </li>
            <li className="list-item">
              <span className="list-icon">✔</span>
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container all-recipies">
        <a href="#" className="link">
          See all recipies →
        </a>
      </div>
    </section>
  );
}

export default Meals;
