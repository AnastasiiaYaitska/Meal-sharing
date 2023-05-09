import React from "react";
import { useState, useEffect } from "react";
import { fetchAllMeals } from "../fetchAPI/fetchAPI";
import MealItem from "../../MealItem/MealItem";

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const allMeals = async () => {
      const data = await fetchAllMeals();
      setMeals(data);
    };
    allMeals();
  }, []);

  if (!meals) {
    return <p>...Loading</p>;
  }

  return (
    <ul>
      {meals.map(({ Id, Title, Price }) => (
        <MealItem key={Id} title={Title} price={Price} />
      ))}
    </ul>
  );
};

export default MealsList;
