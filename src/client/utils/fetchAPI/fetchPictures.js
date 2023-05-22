import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spoonacular.com/recipes/complexSearch",
  params: {
    apiKey: "f0c8d2971b214a948e8551ebe8a97577",
    number: 1,
  },
});

export const fetchPictures = async (query) => {
  try {
    const { data } = await instance.get("", {
      params: {
        query: query,
      },
    });
    console.log(data.results[0]);
    return data.results[0];
  } catch (error) {
    console.log(error);
  }
};
