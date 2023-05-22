import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const FormButtonWrap = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    ...otherProps,
    fullWidth: true,
    color: "warning",
    variant: "contained",
    onClick: handleSubmit,
  };

  return <Button {...configButton}>{children}</Button>;
};

export default FormButtonWrap;
