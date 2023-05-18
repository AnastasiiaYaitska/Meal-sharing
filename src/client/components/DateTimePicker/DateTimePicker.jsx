import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

//Material ui reusable form component

const DateTimePicker = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: "datetime-local",
    defaultValue: new Date(),
    // minDate: new Date(),
    fullWidth: true,
    variant: "outlined",
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return <TextField {...configDateTimePicker} />;
};

export default DateTimePicker;
