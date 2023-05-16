import React from "react";
import PropTypes from "prop-types";
import { MainContainer } from "./Container.styled";

const Container = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
