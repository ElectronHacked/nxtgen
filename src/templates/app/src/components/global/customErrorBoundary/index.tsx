import React, { FC, ReactNode } from 'react';
import ErrorBoundary from 'react-error-boundary';
import CustomErrorBoundaryFallbackComponent from './fallbackComponent';
import './styles.scss';

interface IProps {
  children: ReactNode;
}

const CustomErrorBoundary: FC<IProps> = ({ children }) => (
  <ErrorBoundary FallbackComponent={CustomErrorBoundaryFallbackComponent}>{children}</ErrorBoundary>
);

export default CustomErrorBoundary;
