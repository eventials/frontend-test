import React from "react";
import { Button } from "antd";
import {
  Container,
  WarningIcon,
  ActivityIndicator,
  ErrorText,
  FormattedMessageStyled,
} from "./styles";
import { LoadingWrapperProps } from "./types";

const LoadingWrapper = ({
  loading,
  loadError,
  handleRetry,
  children,
}: LoadingWrapperProps) => {
  if (loading) {
    return (
      <Container isLoading>
        <ActivityIndicator />
        <FormattedMessageStyled id="app.loading" />
      </Container>
    );
  }

  if (loadError) {
    return (
      <Container>
        <WarningIcon />
        <ErrorText>
          <FormattedMessageStyled id="app.loadError" />
        </ErrorText>
        {handleRetry && (
          <Button type="primary" onClick={handleRetry}>
            <FormattedMessageStyled id="app.tryAgain" />
          </Button>
        )}
      </Container>
    );
  }

  return children;
};

export default LoadingWrapper;
