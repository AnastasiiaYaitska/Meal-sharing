import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import CardContent from "@mui/material/CardContent";

export const Img = styled.img`
  width: 100px;
  height: 100px;
`;

export const DetailsButton = styled(NavLink)`
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

export const ItemContainer = styled(CardContent)`
  height: 100%;
`;
