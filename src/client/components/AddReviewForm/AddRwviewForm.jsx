import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { Grid } from "@mui/material";
import FormTextFieldWrapper from "../FormTextFieldWrapper/FormTextFieldWrapper";
import FormButtonWrap from "../FormButtonWrap/FormButtonWrap";
import StarVoting from "../StarVoting/StarVoting";
import { FormContainer } from "./AddReviewForm.styled";

const AddReviewForm = ({ handleClose, mealId }) => {
  const initialValues = {
    Title: "",
    Description: "",
    Stars: "", //number

    Meal_id: "", //number
    Created_date: new Date(), //2023-03-09
  };

  const schema = yup.object().shape({
    Title: yup.string().required("Required"),
    Description: yup.string().required("Required"),
    Stars: yup.number().required("Required"),
  });

  const handlerSubmit = (values, actions) => {
    console.log(values);
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
            <Grid item xs={12}>
              <FormTextFieldWrapper name="Stars" as={StarVoting} label="Star" />
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
