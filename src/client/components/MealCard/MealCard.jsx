import React from "react";
import { normalizeDate, normalizeDateTime } from "../../utils/normalizeDate";
import FormsModal from "../FormsModal/FormsModal";
import AddReservationForm from "../AddReservationForm/AddReservationForm";
import AddReviewForm from "../AddReviewForm/AddReviewForm";
import { Reviews } from "@mui/icons-material";
import MealCartButtons from "../MealCardButtons/MealCardButtons";
import { CardContainer, CardWrap } from "./MealCard.styled";

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
    <CardContainer>
      <div>
        <img src={url} alt="" />
      </div>
      <CardWrap>
        <h2>{Title}</h2>
        <h3>Can be pick up: {normalizeDateTime(When)}</h3>
        <p>Located: {Location}</p>
        <p>{Description}</p>
        <p>Price : {Price} kr</p>
        <p>Available place: {availableSlot <= 0 ? 0 : availableSlot}</p>
        <MealCartButtons availablePlace={availableSlot} mealId={Id} />
      </CardWrap>
    </CardContainer>
  );
};

export default MealCard;
