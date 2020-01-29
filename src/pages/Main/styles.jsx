import styled from "styled-components";
import { style } from "../../configs/theme";

const Form = styled.div`
  margin-top: 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;

  label {
    color: #acaca0;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }
  input,
  select {
    font-family: ${style("headerFontFamily")};
    font-size: ${style("fontSize.normal")};
    font-weight: ${style("headerFontWeight")};
    line-height: ${style("fontSize.normal")};
    padding: ${style("paddingHalf")};
    color: #666;
    border: 0;
    border-radius: ${style("radius")};
    box-shadow: ${style("shadow.small")};
  }
`;

const Container = styled.div`
  margin-top: 2%;
  width: 100%;
  height: auto;
  background: #cecece;
  border-radius: ${style("radius")};
  box-shadow: ${style("shadow.small")};
`;

const Info = styled.span`
  font-family: ${style("headerFontFamily")};
  font-weight: ${style("headerFontWeight")};
`;

export { Form, Error, Container, Info };
