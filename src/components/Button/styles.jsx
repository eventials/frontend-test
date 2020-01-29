import styled from "styled-components";
import { style } from "../../configs/theme";

const ButtonStyled = styled.button`
  background: ${props => props.theme.color[props.color]};
  border-radius: ${style("radius")};
  box-shadow: ${style("shadow.small")};
  border: none;
  color: ${props => props.theme.color[`${props.color}Alt`]};

  cursor: pointer;
  display: inline-block;
  font-family: ${style("headerFontFamily")};
  font-size: ${style("fontSize.normal")};
  font-weight: ${style("headerFontWeight")};
  line-height: ${style("fontSize.normal")};
  padding: ${style("paddingHalf")};
  position: relative;
  text-decoration: none;
  margin-left: ${style("marginHalf")};
`;

export default ButtonStyled;
