import axios from "axios";

axios.defaults.baseURL = "http://localhost:5050/api";

const options = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const fetchAllMeals = async () => {
  try {
    const { data } = await axios.get("/all-meals", options);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
