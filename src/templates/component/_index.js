import React, { FC,ReactNode } from 'react';
import './styles.scss';

interface IProps {
  readonly children?: ReactNode 
};

const {{component}}: FC<IProps> = ({ children }) => (
  <div className="{{className}}">
    {{component}} component
  </div>
);

export default {{component}};
