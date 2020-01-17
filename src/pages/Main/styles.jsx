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
    width: 40%;
    padding: 0 20px;
    background: #fff;
    margin-left: 10px;
    border: 0;
    font-size: 18px;
    color: #444;
    /* cantos arredondados */
    border-radius: ${style("radius")};
  }
`;
export const Paginate = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: ${style("width.max")};

  button {
    border: 0;
    background: none;
  }
`;
