import React, { FC } from 'react';
import './styles.scss';

interface IProps {};

export const <%= componentName %>: FC<IProps> = () => (
  <div className="<%= className %>">
    <%= componentName %> componentName
  </div>
);

export default <%= componentName %>;
