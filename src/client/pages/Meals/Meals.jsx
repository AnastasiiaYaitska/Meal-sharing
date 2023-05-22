import React, { useState, useEffect } from "react";
import {
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import FilterBar from "../../components/FilterBar/FilterBar";
import FormsModal from "../../components/FormsModal/FormsModal";
import AddMealForm from "../../components/AddMealForm/AddMealForm";
import MealsList from "../../components/MealsList/MealsList";
import { fetchAllMeals } from "../../utils/fetchAPI/fetchMeal";

import { matchPath } from "react-router";

const Meals = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { title } = useParams();
  console.dir(title);

  // const [searchParams, setSearchParams] = useSearchParams();
  console.log(location);
  const match = matchPath(`/meals/`, {
    path: "/meals/:id",
    exact: true,
    strict: false,
  });
  console.log(match);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const meals = async () => {
      try {
        const result = await fetchAllMeals();
        setIsLoading(false);
        return setAllMeals(result);
      } catch (error) {
        setError(error.message);
      }
    };
    meals();
  }, []);

  console.log(allMeals);
  return (
    <>
      <FormsModal buttonText="Add New Meal">
        {(handleClose) => <AddMealForm handleClose={handleClose} />}
      </FormsModal>
      {/* <FilterBar /> */}
      <MealsList
        meals={allMeals}
        // to={(Id) => `/${Id}`}
        location={location}
      />
    </>
  );
};

export default Meals;
