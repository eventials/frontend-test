import styled from "styled-components";
import { style } from "../../configs/theme";
import "react-toastify/dist/ReactToastify.min.css";

export const Row = styled.div`
  justify-content: ${props => (props.align ? props.align : "initial")};

  &:not(:first-child) {
    padding-top: ${style("padding")};
  }
`;

export default styled.div`
  width: 100%;
  max-width: ${style("width.max")};
  margin: auto;
`;
