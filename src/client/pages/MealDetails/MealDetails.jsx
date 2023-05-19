import React, { useEffect } from "react";
import { fetchPictures } from "../../utils/fetchAPI/fetchPictures";
import MealCard from "../../components/MealCard/MealCard";

const MealDetails = () => {
  useEffect(() => {
    const picture = async () => {
      await fetchPictures("pizza");
    };
    picture();
  }, []);
  return (
    <>
      <MealCard />
    </>
  );
};

export default MealDetails;
