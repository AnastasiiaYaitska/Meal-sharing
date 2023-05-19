import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { grey } from "@mui/material/colors";

export const StyledStar = styled(AiFillStar)`
  fill: ${(prop) => {
    return prop.star <= prop.rating ? "rgba(245, 206, 39, 0.8)" : "grey";
  }};
  height: 25px;
  width: 25px;
`;
