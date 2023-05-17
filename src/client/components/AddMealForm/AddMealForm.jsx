import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

const AddMealForm = ({ onClose }) => {
  const initialValues = {
    Title: "",
    Description: "",
    Location: "",
    When: "", //2023-03-09 12:00:00
    Max_reservations: 0, //number
    Price: "",
    Created_date: "", //2023-03-09
  };

  const schema = yup.object().shape({
    Title: yup.string().required("Required"),
    Description: yup.string().required("Required"),
    Location: yup.string().required("Required"),
    When: yup.string().required("Required"),
    Max_reservations: yup.number().required("Required"),
    Price: yup.string().required("Required"),
    Created_date: yup.string().required("Required"),
  });

  const handlerSubmit = (values, actions) => {
    //axios post meal(values)

    actions.resetForm();
    onClose();
  };

  return (
    <Container maxWidth="xs">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handlerSubmit}
      >
        <Form>
          <Grid item xs={12}></Grid>
        </Form>
      </Formik>
    </Container>
  );
};
