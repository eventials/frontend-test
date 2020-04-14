import React from "react";
import { Button } from "antd";
import { Container, WarningIcon, ActivityIndicator, ErrorText } from "./styles";
import { LoadingWrapperProps } from "./types";

const LoadingWrapper = ({
  loading,
  loadError,
  handleRetry,
  children,
}: LoadingWrapperProps) => {
  if (loading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }

  if (loadError) {
    return (
      <Container>
        <WarningIcon />
        <ErrorText>{loadError}</ErrorText>
        {handleRetry && (
          <Button type="primary" onClick={handleRetry}>
            Try again!
          </Button>
        )}
      </Container>
    );
  }

  return children;
};

export default LoadingWrapper;
