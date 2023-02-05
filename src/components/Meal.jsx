import React from "react";

const Meal = ({ src, alt, tags, title, calories, score, star, rating }) => {
  return (
    <>
      <div className="meal">
        <img src={src} alt={alt} className="meal-img" />
        <div className="meal-content">
          <div className="meal-tags">
            {tags.map((tag, index) => {
              return (
                <span key={index} className="tag tag-vegeratian">
                  {tag}
                </span>
              );
            })}
          </div>
          <p className="meal-title">{title}</p>
          <ul className="meal-attributes">
            <li className="meal-attribute">
              <span className="list-icon">🔥</span>
              <span>
                <strong>{calories}</strong> Calories
              </span>
            </li>
            <li className="meal-attribute">
              <span className="list-icon">🎖</span>
              <span>
                Nutriscore &reg; <strong>{score}</strong>
              </span>
            </li>
            <li className="meal-attribute">
              <span className="list-icon">⭐</span>
              <span>
                <strong>{star}</strong> rating ({rating})
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Meal;
