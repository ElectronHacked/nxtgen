import React, { FC } from 'react';
import { Page } from 'components';
import './styles.scss';

interface IProps {};

export const <%= componentName %>: FC<IProps> = () => (
  <Page title="<%= title %>" description="This is the <%= title %> Page">
    <div className="<%= className %>">
      <p>
        This is the <strong><%= title %></strong> page
      </p>
    </div>
  </Page>
);

export default <%= componentName %>;