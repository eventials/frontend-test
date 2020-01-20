import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { style } from "../../configs/theme";

const DropStyled = styled.select`
  background: ${props => props.theme.color[props.color]};
  width: 30%;
  border-radius: ${style("radius")};
  box-shadow: ${style("shadow.small")};
  border: none;
  color: ${props => props.theme.color[`${props.color}Alt`]};

  cursor: pointer;
  display: inline-block;
  font-family: ${style("headerFontFamily")};
  font-size: 20px;
  font-weight: ${style("headerFontWeight")};
  line-height: ${style("fontSize.normal")};
  padding: ${style("paddingHalf")};
  position: relative;
  text-decoration: none;
  margin-left: ${style("marginHalf")};
  text-align: center; /* para firefox */
  text-align-last: center; /* para chrome */
`;

const DropDown = ({ ...props }) => <DropStyled {...props}></DropStyled>;

DropDown.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string
};

DropDown.defaultProps = {
  color: "primary",
  type: "select"
};

export default DropDown;
