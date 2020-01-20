import styled from "styled-components";
import { style } from "../../configs/theme";

export const Form = styled.form`
  margin-top: 20px;
  width: ${style("width")};
  max-width: ${style("width.max")};
  min-width: ${style("width.min")};
  display: flex;
  input {
    flex: 1;
    height: 55px;
    width: 40%;
    padding: 0 20px;
    background: #fff;
    margin-left: 10px;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: ${style("radius")};
  }

  button {
    margin-left: ${style("marginHalf")};
  }

  @media screen and (max-width: ${style("width.max")}) {
    button {
      margin-right: ${style("marginHalf")};
    }
  }
`;
