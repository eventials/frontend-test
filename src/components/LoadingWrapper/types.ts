export interface LoadingWrapperProps {
  loading: boolean;
  loadError?: boolean;
  handleRetry?: () => {};
  children: any;
}
