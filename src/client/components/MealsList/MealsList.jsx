import React, { useEffect, useState } from "react";
import { fetchAllMeals } from "../../utils/fetchAPI/fetchMeal";
import MealItem from "../MealItem/MealItem";
import { LiStyled, UlStyled } from "./MealsList.styled";

const MealsList = ({ meals, to, location }) => {
  return (
    <UlStyled>
      {meals.map((meal) => (
        <LiStyled key={meal.Id}>
          {" "}
          <MealItem meal={meal} />
        </LiStyled>
      ))}
    </UlStyled>
  );
};

export default MealsList;
