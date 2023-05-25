import axios from "axios";

axios.defaults.baseURL = "http://localhost:5050/api";

axios.defaults.headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const fetchAllMeals = async () => {
  try {
    const { data } = await axios.get("/meals");
    return data;
  } catch (error) {
    console.log(error.massage);
  }
};

export const fetchMealById = async (id) => {
  try {
    const { data } = await axios.get(`/meals/${id}`);
    return data[0];
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
