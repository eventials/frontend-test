import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { style } from "../../configs/theme";

const UlStyled = styled.ul`
  display: grid;
  grid-gap: 10px;
  margin-top: 30px;
  list-style: none;
  font-family: ${style("tableFontFamily")};
  font-size: 14px;
  box-shadow: ${style("shadow.small")};
  position: relative;
  margin-left: ${style("marginHalf")};
  padding: ${style("padding")};
  background: #eaeef2;
  width: ${style("width")};

  li {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-radius: 4px;
    background: #dee4ea;

    strong {
      width: 40%;
    }

    span {
      width: 40%;
    }

    button {
      width: 20%;
      margin: 0 5px 0 5px;
      border: 0;
      background: none;
      cursor: pointer;
      float: right;
    }
  }
`;

const Ul = ({ ...props }) => <UlStyled {...props}></UlStyled>;

Ul.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string
};

Ul.defaultProps = {
  color: "tertiary",
  type: "ul"
};

export default Ul;
