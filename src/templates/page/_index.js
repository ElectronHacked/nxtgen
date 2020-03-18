import React, { FC } from 'react';
import { MainLayout } from 'components/layouts';
import './styles.scss';

interface IProps {};

export const <%= componentName %>: FC<IProps> = () => (
  <MainLayout title="<%= title %>" description="This is the <%= title %> Page">
    <div className="<%= className %>">
      <p>
        This is the <strong><%= title %></strong> page
      </p>
    </div>
  </MainLayout>
);

export default <%= componentName %>;