import React from "react";
import { normalizeDate, normalizeDateTime } from "../../utils/normalizeDate";

const MealCard = ({ url, meal }) => {
  const {
    Id,
    Title,
    Description,
    Location,
    When,
    Max_reservations,
    Price,
    Created_date,
    Total_reservations,
  } = meal;
  const availableSlot = Max_reservations - Total_reservations;

  return (
    <div>
      <div>
        <img src={url} alt="" />
      </div>
      <div>
        <h2>{Title}</h2>
        <h3>Can be pick up: {normalizeDateTime(When)}</h3>
        <p>Located: {Location}</p>
        <p>{Description}</p>
        <p>Price : {Price}</p>
        <p>Available place: {availableSlot <= 0 ? 0 : availableSlot}</p>
      </div>
    </div>
  );
};

export default MealCard;
