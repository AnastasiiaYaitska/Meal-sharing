import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Grid } from "@mui/material";
import FormTextFieldWrapper from "../FormTextFieldWrapper/FormTextFieldWrapper";
import FormButtonWrap from "../FormButtonWrap/FormButtonWrap";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import { FormContainer } from "./AddMealForm.styled";
import { addMeal } from "../../utils/fetchAPI/fetchMeal";
import { normalizeDate, normalizeDateTime } from "../../utils/normalizeDate";

const AddMealForm = ({ handleClose }) => {
  const initialValues = {
    Title: "",
    Description: "",
    Location: "",
    When: "", //2023-03-09 12:00:00
    Max_reservations: "", //number
    Price: "",
    Created_date: new Date(), //2023-03-09
  };

  const schema = yup.object().shape({
    Title: yup.string().required("Required"),
    Description: yup.string().required("Required"),
    Location: yup.string().required("Required"),
    When: yup.string().required("Required"),
    Max_reservations: yup.number().required("Required"),
    Price: yup.number().required("Required"),
    Created_date: yup.string().required("Required"),
  });

  const handlerSubmit = (values, actions) => {
    const { Max_reservations, Created_date, When, ...otherValues } = values;
    const normalizeValue = {
      ...values,
      Max_reservations: +Max_reservations,
      When: normalizeDateTime(When),
      Created_date: normalizeDate(Created_date),
    };
    console.log(normalizeValue);
    addMeal(normalizeValue);
    //need add notification of successful
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
              <FormTextFieldWrapper name="Title" label="Meal title" />
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
              <FormTextFieldWrapper name="Location" label="Location" />
            </Grid>
            <Grid item xs={12}>
              <DateTimePicker name="When" label="When it ready" />
            </Grid>
            {/* <Grid item xs={6}>
            <FormTextFieldWrapper name="Location" label="Location" />
          </Grid> */}
            <Grid item xs={6}>
              <FormTextFieldWrapper
                name="Max_reservations"
                label="Max Reservations"
              />
            </Grid>
            <Grid item xs={6}>
              <FormTextFieldWrapper name="Price" label="Price" />
            </Grid>
            <Grid item xs={12}>
              <FormButtonWrap>Create Meal</FormButtonWrap>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default AddMealForm;
