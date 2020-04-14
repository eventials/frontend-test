export interface LoadingWrapperProps {
  loading: boolean;
  loadError?: string;
  handleRetry?: () => {};
  children: any;
}
