import axios from "axios";


export const fetchAllReview = async () => {
  try {
    const { data } = await axios.get("/review");
    return data;
  } catch (error) {
    console.log(error.massage);
  }
};

export const fetchReviewById = async (id) => {
  try {
    const { data } = await axios.get(`/review/${id}`);
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
