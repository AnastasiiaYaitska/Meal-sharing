import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const ButtonLink = styled(NavLink)`
  display: block;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 5px;
  background-color: orange;
  color: black;
  font-family: "Gill Sans", sans-serif;
  font-weight: 600;
  &:hover {
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    color: wheat;
  }
`;
