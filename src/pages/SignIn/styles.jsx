import styled from "styled-components";
import { style } from "../../configs/theme";

export const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  background: #f40;
`;

export const Form = styled.form`
  /* distanciar um pouco do topo do logo */
  margin-top: 20px;

  /* utilizaremos para fazer os alinhamentos */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  input {
    /* garantimos que ele irá ocupar todo o espaço possível horizontalmente */
    height: 55px;
    margin: 10px;
    padding: 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    /* cantos arredondados */
    border-radius: 5px;
  }
`;

export const Img = styled.img`
  height: 70px;
  margin: 20px;
`;
