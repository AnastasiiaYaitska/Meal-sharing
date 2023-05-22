import axios from "axios";

export const fetchAllReservations = async () => {
  try {
    const { data } = await axios.get("/reservations");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.massage);
  }
};

export const addReservation = async (reservation) => {
  try {
    const { data } = await axios.post("/reservations", reservation);
    return data;
  } catch (error) {
    console.log(error.massage);
  }
};
