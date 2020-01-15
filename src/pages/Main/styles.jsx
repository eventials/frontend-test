import styled from "styled-components";
import { style } from "../../configs/theme";

export const Form = styled.form`
  /* distanciar um pouco do topo do logo */
  margin-top: 20px;
  /* força ocupar todo o espaço horizontal possível */
  width: ${style("width")};
  /* limita o width 100% em 400px */
  max-width: ${style("width.max")};
  min-width: ${style("width.min")};
  /* utilizaremos para fazer os alinhamentos */
  display: flex;
  input {
    /* garantimos que ele irá ocupar todo o espaço possível horizontalmente */
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    /* cantos arredondados */
    border-radius: ${style("radius")};
    border: ${style("border")};
  }
`;
