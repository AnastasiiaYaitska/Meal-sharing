import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handlerChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handlerChange,
  };

  let range = [];

  for (let index = 1; index <= options; index++) {
    range.push(
      <MenuItem key={index} value={index}>
        {index}
      </MenuItem>
    );
  }

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = error;
  }

  return <TextField {...configSelect}>{range}</TextField>;
};

export default SelectWrapper;
