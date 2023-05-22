import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { GoBack } from "./GoBackArrow.styled";

const GoBackArrow = ({ goBackRef }) => {
  return (
    <>
      {" "}
      <GoBack to={goBackRef}>
        {" "}
        <span>
          {" "}
          <BsArrowLeft />
        </span>
        Go back
      </GoBack>
    </>
  );
};

export default GoBackArrow;
