import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Grid, Typography } from "@mui/material";
import FormTextFieldWrapper from "../FormTextFieldWrapper/FormTextFieldWrapper";
import FormButtonWrap from "../FormButtonWrap/FormButtonWrap";
import StarVoting from "../StarVoting/StarVoting";
import { FormContainer } from "./AddReviewForm.styled";
import { normalizeDate } from "../../utils/normalizeDate";
import { addReview } from "../../utils/fetchAPI/fetchReview";

const AddReviewForm = ({ handleClose, mealId }) => {
  const [rating, setRating] = useState(1);

  const initialValues = {
    Title: "",
    Description: "",
    Stars: rating, //number
  };

  const schema = yup.object().shape({
    Title: yup.string().required("Required"),
    Description: yup.string().required("Required"),
    Stars: yup.number().required("Required"),
  });

  const handlerSubmit = (values, actions) => {
    console.log("Submit fun");
    const { Title, Description } = values;
    const normalizeValue = {
      Title,
      Description,
      Stars: +rating,
      Meal_id: mealId,
      Created_date: normalizeDate(new Date()),
    };
    addReview(normalizeValue);
    console.log(values, normalizeValue);
    actions.resetForm();
    handleClose();
  };

  return (
    <FormContainer maxWidth="xs">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handlerSubmit}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormTextFieldWrapper name="Title" label="Review title" />
            </Grid>
            <Grid item xs={12}>
              <FormTextFieldWrapper
                name="Description"
                label="Description"
                multiline={true}
                rows={4}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                Rate the dish from 1-5:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <StarVoting rating={rating} setRating={setRating} />
              {/* <FormTextFieldWrapper name="Stars" as={StarVoting} label="Star" /> */}
            </Grid>
            <Grid item xs={12}>
              <FormButtonWrap>Add Review</FormButtonWrap>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default AddReviewForm;
