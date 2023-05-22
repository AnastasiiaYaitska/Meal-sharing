// import React from "react";
// import { useLocation, useHistory } from "react-router-dom";
// import * as yup from "yup";
// import Switch from "@mui/material/Switch";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import { Formik, Form } from "formik";
// import { Grid } from "@mui/material";
// import FormTextFieldWrapper from "../FormTextFieldWrapper/FormTextFieldWrapper";

// const FilterBar = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const history = useHistory();
//   // Accessing query parameters
//   const queryValueTitle = searchParams.get("title");
//   const queryValueAvailableReservations = searchParams.get(
//     "availableReservations"
//   );
//   const queryValueSortDir = searchParams.get("sortDir");

//   searchParams.set("title", "price");
//   searchParams.set("availableReservations", "desc");
//   searchParams.set("sortDir", "price");

//   // Update the URL with the new query parameters
//   history.push({
//     pathname: "/api/meals",
//     search: searchParams.toString(),
//   });
//   return (
//     <div>
//       {/* <input type="text" name="title" value={title} onChange={ } /> */}
//       <FormControlLabel
//         control={<Switch />}
//         label="Only available"
//         color="warning"
//         name="availableReservations"
//       />
//     </div>
//   );
// };

// export default FilterBar;
