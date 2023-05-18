import React from "react";
import FormsModal from "../../components/FormsModal/FormsModal";
import AddMealForm from "../../components/AddMealForm/AddMealForm";

import AddReviewForm from "../../components/AddReviewForm/AddRwviewForm";

const Meals = () => {
  return (
    <>
      <FormsModal buttonText="Add New Meal">
        {(handleClose) => <AddMealForm handleClose={handleClose} />}
      </FormsModal>
      <AddReviewForm />
    </>
  );
};

export default Meals;
