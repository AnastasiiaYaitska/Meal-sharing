import React from "react";
import FormsModal from "../../components/FormsModal/FormsModal";
import AddMealForm from "../../components/AddMealForm/AddMealForm";

const Meals = () => {
  return (
    <FormsModal buttonText="Add New Meal">
      {(handleClose) => <AddMealForm handleClose={handleClose} />}
    </FormsModal>
  );
};

export default Meals;
