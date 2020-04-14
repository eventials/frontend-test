import styled from "styled-components";
import { style } from "../../configs/theme";
import background from "../../assets/background.jpg";

export const Row = styled.div`
  justify-content: ${(props) => (props.align ? props.align : "initial")};

  &:not(:first-child) {
    padding-top: ${style("padding")};
  }
`;

export default styled.div`
  display: flex;
  align-items: flex-start;
  padding: 50px;
  justify-content: center;
  max-width: ${style("width.max")};
  width: 100vw;
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;
