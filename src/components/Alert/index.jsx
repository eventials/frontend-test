import React from "react";
import styled from "styled-components";
import { style } from "../../configs/theme";

const Error = styled.div`
  width: 100%;
  height: 60px;
  background: #e74c3c;
  border-radius: ${style("radius")};
  box-shadow: ${style("shadow.small")};
  color: #fff;

  display: flex;
  justify-content: space-between;
  padding: 1%;
  align-items: center;
  font-family: ${style("headerFontFamily")};
  font-size: ${style("fontSize.normal")};
`;

const ButtonClose = styled.a`
  text-decoration: none;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const Alert = ({ children, ...props }) => {
  const onClose = () => {
    props.closeError();
  };

  return (
    <Error>
      <div>{children}</div>
      <ButtonClose onClick={onClose}>x</ButtonClose>
    </Error>
  );
};

export default Alert;
