import React, { useEffect } from "react";
import { fetchPictures } from "../../utils/fetchAPI/fetchPictures";
import MealCard from "../../components/MealCard/MealCard";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const MealDetails = () => {
  const { mealId } = useParams();
  console.log(mealId);
  useEffect(() => {
    const picture = async () => {
      await fetchPictures();
    };
    picture();
  }, []);
  return (
    <>
      <p>meal</p>
      <MealCard />
    </>
  );
};

export default MealDetails;
