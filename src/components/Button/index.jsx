import React from "react";
import PropTypes from "prop-types";

import ButtonStyled from "./styles";

const Button = ({ label, ...props }) => (
  <ButtonStyled {...props}>{label}</ButtonStyled>
);

Button.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  color: "primary",
  type: "button"
};

export default Button;
