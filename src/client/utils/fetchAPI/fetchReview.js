import axios from "axios";

axios.defaults.baseURL = "http://localhost:5050/api";

axios.defaults.headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

// const options = {
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
// };

export const fetchAllReview = async () => {
  try {
    const { data } = await axios.get("/review");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.massage);
  }
};

export const fetchReviewById = async (id) => {
  try {
    const { data } = await axios.get(`/review/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.massage);
  }
};

export const addReview = async (review) => {
  try {
    const { data } = await axios.post("/review", review);
    return data;
  } catch (error) {
    console.log(error.massage);
  }
};

export const deleteReview = async (id) => {
  try {
    const { data } = await axios.delete(`/review/${id}`);
    return data;
  } catch (error) {
    console.log(error.massage);
  }
};
