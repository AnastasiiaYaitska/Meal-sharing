import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Grid } from "@mui/material";
import FormTextFieldWrapper from "../FormTextFieldWrapper/FormTextFieldWrapper";
import SelectWrapper from "../SelectWrapper/SelectWrapper";
import FormButtonWrap from "../FormButtonWrap/FormButtonWrap";
import { normalizeDate } from "../../utils/normalizeDate";
import { FormContainer } from "./AddReservationForm.styled";

const AddReservationForm = ({ handleClose, availablePlace, mealId }) => {
  const initialValues = {
    Contact_name: "",
    Contact_email: "",
    Contact_phonenumber: "",
    Number_of_guests: "", //number
  };

  const schema = yup.object().shape({
    Contact_name: yup.string().required("Required"),
    Contact_email: yup.string().email("Invalid email").required("Required"),
    Contact_phonenumber: yup
      .number()
      .integer()
      .typeError("Please enter a valid phone number")
      .required("Required"),
    Number_of_guests: yup.number().required("Required"),
  });

  const handlerSubmit = (values, actions) => {
    const { Number_of_guests, ...otherValues } = values;
    const normalizeValue = {
      ...values,
      Max_reservations: +Number_of_guests,
      Created_date: normalizeDate(new Date()),
      Meal_id: mealId,
    };
    console.log(normalizeValue);
    //    addMeal(normalizeValue);
    //    //need add notification of successful
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
              <FormTextFieldWrapper name="Contact_name" label="Contact name" />
            </Grid>
            <Grid item xs={12}>
              <FormTextFieldWrapper
                name="Contact_email"
                label="Contact email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormTextFieldWrapper
                name="Contact_phonenumber"
                label="Contact number"
              />
            </Grid>
            <Grid item xs={12}>
              <SelectWrapper
                name="Number_of_guests"
                label="Number of guests"
                options={availablePlace}
              />
            </Grid>
            <Grid item xs={12}>
              <FormButtonWrap>Add Reservation</FormButtonWrap>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default AddReservationForm;

//    "Id": 1,
//         "Number_of_guests": 4,
//         "Meal_id": 1,
//         "Created_date": "2023-02-28T23:00:00.000Z",
//         "Contact_phonenumber": "+45 50 20 20 20",
//         "Contact_name": "Lili",
//         "Contact_email": "lili.lili@gmail.com"
//     },
