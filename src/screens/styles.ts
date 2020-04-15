import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  box-shadow: 3px 3px -2px black;
  padding: 20px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 16pt;
  color: white;
  text-shadow: 1px 1px 1px #333;
`;
