import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const GoBack = styled(Link)`
  text-decoration: none;
  padding: 3px 5px;
  margin-left: 10px;
  border-radius: 5px;
  border: 1px solid black;
  color: black;
  &:hover,
  &:focus {
    color: orangered;
  }
`;
