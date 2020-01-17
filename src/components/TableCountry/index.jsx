import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { style } from "../../configs/theme";

const UlStyled = styled.ul`

  display: grid;
  grid-gap: 10px;
  margin-top: 30px;
  list-style: none;
  font-family: ${style("tableFontFamily")};
  font-size:14px;
  box-shadow: ${style("shadow.small")};
  position: relative;
  margin-left: ${style("marginHalf")}; 
  padding: ${style("padding")};
  background: ${props => props.theme.color[props.color]};
  cursor: pointer;

  li {
    padding: 15px;
    border-radius: 4px;
    background:#dae1e8;
    opacity: ${props => (props.past ? 0.6 : 1)};
   
  }

  /* background: ${props => props.theme.color[props.color]};
  border-radius: ${style("radius")};
  box-shadow: ${style("shadow.small")};
  border: none;
  color: ${props => props.theme.color[`${props.color}Alt`]};

  font-weight: ${style("headerFontWeight")};
  line-height: ${style("fontSize.normal")};
  text-decoration: none;*/
`;

const Ul = ({ ...props }) => <UlStyled {...props}></UlStyled>;

Ul.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string
};

Ul.defaultProps = {
  color: "tertiary",
  type: "ul"
};

export default Ul;
