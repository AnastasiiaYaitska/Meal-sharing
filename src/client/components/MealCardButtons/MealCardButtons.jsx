import React from "react";
import FormsModal from "../FormsModal/FormsModal";
import AddReservationForm from "../AddReservationForm/AddReservationForm";
import AddReviewForm from "../AddReviewForm/AddReviewForm";
import { ButtonsCardContainer } from "./MealCardButtons.styled";

const MealCartButtons = ({ availablePlace, mealId }) => {
  return (
    <ButtonsCardContainer>
      <FormsModal
        buttonText={"Reservation"}
        isDisabled={availablePlace <= 0 ? "true" : "false"}
      >
        {(handleClose) => (
          <AddReservationForm
            handleClose={handleClose}
            availablePlace={availablePlace}
            mealId={mealId}
          />
        )}
      </FormsModal>
      <FormsModal buttonText={"Leave review"}>
        {(handleClose) => (
          <AddReviewForm handleClose={handleClose} mealId={mealId} />
        )}
      </FormsModal>
    </ButtonsCardContainer>
  );
};
export default MealCartButtons;
