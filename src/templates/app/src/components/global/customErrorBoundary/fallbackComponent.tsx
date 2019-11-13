import React, { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { Button, Result } from 'antd';
import Router from 'next/router';

import './styles.scss';

const errorBoundaryErrorHandler = ({ error, componentStack }: FallbackProps) => {
  // Do something with the error
  // E.g. log to an error logging client here
  console.log('CustomErrorBoundary error :', error && error.message);
  console.log('CustomErrorBoundary componentStack :', componentStack);
};

const CustomErrorBoundaryFallbackComponent: FC<FallbackProps> = props => {
  errorBoundaryErrorHandler(props);

  return (
    <div className="custom-error-boundary">
      <h2 className="oops">Oops!</h2>

      <Result
        status="404"
        title="Aaaah! Something went wrong!"
        subTitle={
          <p className="secondary-message">
            Brace yourself till we get the error fixed. You may also refresh the page or try again later
          </p>
        }
        extra={
          <Button type="primary" onClick={() => Router.push('/')} className="take-me-home">
            TAKE ME HOME
          </Button>
        }
      />
    </div>
  );
};

export default CustomErrorBoundaryFallbackComponent;
