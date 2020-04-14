import { Select } from "antd";
import styled from "styled-components";

export default styled(Select).attrs(() => ({
  showSearch: true,
}))`
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const OptionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PopulationData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 80px;
  background: #ddd;
  padding: 0px 5px;
  border-radius: 3px;
  font-size: 10pt;
`;

export const PopulationCount = styled.div`
  color: #333;
`;
