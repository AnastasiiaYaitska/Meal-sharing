import React from "react";
import { NavBar, Nav, NavList, Link } from "./Header.styled";

const Header = () => {
  return (
    <NavBar>
      <Link exact to="/">
        Meal-sharing
      </Link>
      <Nav>
        <NavList>
          <li>
            {" "}
            <Link to="/meals">Meals</Link>
          </li>
          <li>
            {" "}
            <Link to="/review">Reviews</Link>
          </li>
        </NavList>
      </Nav>
    </NavBar>
  );
};

export default Header;
