import styled from "styled-components";
import { style } from "../../configs/theme";

export const Container = styled.div`
  max-width: 500px;
  height: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: ${style("shadow.small")};

  h2 {
    font-family: "Roboto";
    margin: 0 10px 0 10px;
    align-self: center;
    color: #a2a5aa;
  }

  button {
    margin: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    height: 55px;
    margin: 10px;
    padding: 20px;
    background: #fff;
    border: 2px solid #c8cace;
    font-size: 18px;
    border-radius: 5px;
  }

  a {
    font-weight: bold;
    margin: 0 10px 5px 10px;
    font-family: "Roboto";
    text-decoration: none;
  }
`;

export const Img = styled.img`
  height: 70px;
  margin: 20px;
`;
