import axios from "axios";

export const fetchAllMeals = async () => {
  try {
    const { data } = await axios.get("/meals");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.massage);
  }
};

export const fetchMealById = async (id) => {
  try {
    const { data } = await axios.get(`/meals/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.massage);
  }
};

export const addMeal = async (review) => {
  try {
    const { data } = await axios.post("/meals", review);
    return data;
  } catch (error) {
    console.log(error.massage);
  }
};

export const deleteMeal = async (id) => {
  try {
    const { data } = await axios.delete(`/meals/${id}`);
    return data;
  } catch (error) {
    console.log(error.massage);
  }
};
