import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const NavBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(
    to right top,
    #101317,
    #262c2e,
    #3f4746,
    #5c635e,
    #7d7f78
  );
  padding: 30px 75px;

  z-index: 100;
  display: flex;
`;

export const Nav = styled.nav`
  display: flex;
  margin-left: auto;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 50px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  color: white;
  &:hover {
    color: orange;
  }
  &:focus {
    color: orange;
  }
  &.active {
    color: orange;
  }
`;
