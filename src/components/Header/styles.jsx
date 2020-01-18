import styled from "styled-components";
import { style } from "../../configs/theme";

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  box-shadow: ${style("shadow.small")};
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      padding: 5px 10px 5px 5px;
      border-right: 1px solid #eee;
    }
    a {
      display: block;
      margin-top: 2px;
      font-family: sans-serif;
      color: #999;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #333;
      font-size: 18px;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 14px;
      color: #999;
    }
  }

  button {
    margin-left: 40px;
    border-radius: 4px;
    border: 0;
    background: #e54444;
    padding: 10px;
    cursor: pointer;
    color: #fff;

    &:hover {
      background: #db3636;
    }
  }
`;
