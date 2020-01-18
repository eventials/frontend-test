import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-family: "Roboto";
    margin: 0 10px 0 10px;
    align-self: center;
    color: #a2a5aa;
  }

  button {
    height: 50px;
    padding: 10px;
    width: 40%;
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  /* distanciar um pouco do topo do logo */
  margin-top: 20px;

  /* utilizaremos para fazer os alinhamentos */
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    /* garantimos que ele irá ocupar todo o espaço possível horizontalmente */
    height: 55px;
    margin: 10px;
    width: 50%;
    padding: 20px;
    background: #fff;
    border: 2px solid #c8cace;
    font-size: 18px;
    /* cantos arredondados */
    border-radius: 5px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;
export const Img = styled.img`
  height: 70px;
  margin: 20px;
`;
