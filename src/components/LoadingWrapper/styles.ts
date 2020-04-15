import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Spin } from "antd";
import { WarningOutlined } from "@ant-design/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 100px;
  border-radius: 5px;
  min-width: 250px;
  background: ${(props: { isLoading?: boolean }) =>
    props.isLoading
      ? "transparent"
      : `linear-gradient(
    20deg,
    rgba(0, 123, 21, 0.5),
    rgba(0, 21, 123, 0.5)
  )`};
`;

export const WarningIcon = styled(WarningOutlined)`
  font-size: 32pt;
  color: #ff9900;
`;

export const ActivityIndicator = styled(Spin).attrs(() => ({
  size: "large",
}))``;

export const ErrorText = styled.p`
  color: white;
`;

export const FormattedMessageStyled = styled(FormattedMessage)`
  color: white;
`;
