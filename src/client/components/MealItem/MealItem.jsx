import React from "react";

const MealItem = ({ title, price }) => {
  return (
    <li>
      <p>{title}</p> <p>{price}</p>
    </li>
  );
};

export default MealItem;
