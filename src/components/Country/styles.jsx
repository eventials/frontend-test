import styled from "styled-components";
import { style } from "../../configs/theme";

const ItemContainer = styled.div`
  padding: 5px 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  font-family: ${style("headerFontFamily")};
  font-size: ${style("fontSize.normal")};
  font-weight: ${style("headerFontWeight")};
`;

export { ItemContainer };
