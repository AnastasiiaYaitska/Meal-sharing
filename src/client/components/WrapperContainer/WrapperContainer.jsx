import React from "react";
import PropTypes from "prop-types";
import { WrapperContainer } from "./WrapperContainer.styled";

const MainWrapperContainer = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

MainWrapperContainer.propTypes = {
  children: PropTypes.element,
};

export default MainWrapperContainer;
