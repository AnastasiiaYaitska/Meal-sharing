import axios from "axios";

export const fetchAllReservations = async () => {
  try {
    const { data } = await axios.get("/reservations");
    return data;
  } catch (error) {
    console.log(error.massage);
  }
};

export const addReservation = async (reservation) => {
  try {
    const response = await axios.post("/reservations", reservation);
    return response;
  } catch (error) {
    console.log(error);
  }
};
