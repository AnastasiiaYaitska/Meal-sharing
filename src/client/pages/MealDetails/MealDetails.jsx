import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchPictures } from "../../utils/fetchAPI/fetchPictures";
import { fetchMealById } from "../../utils/fetchAPI/fetchMeal";
import MealCard from "../../components/MealCard/MealCard";

const MealDetails = () => {
  const [pictureUrl, setPictureUrl] = useState({});
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const mealFetch = async (id) => {
      try {
        const response = await fetchMealById(id);
        setMeal(response);
        const keyWord = response.Title.split(" ")[0];
        const mealPicture = await fetchPictures(keyWord);
        setPictureUrl(mealPicture);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    mealFetch(id);
  }, []);

  // const mealPicture = fetchPictures();
  // console.log(mealPicture);
  return (
    <>
      <MealCard url={pictureUrl.image} meal={meal} />
    </>
  );
};

export default MealDetails;
