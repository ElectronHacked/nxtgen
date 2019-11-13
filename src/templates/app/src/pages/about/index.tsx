import React from 'react';
import styled from 'styled-components';
import { Page } from 'components';

const Heading = styled.h1`
  color: red;
  font-size: 50px;
`;
const Body = styled.div``;

export default () => {
  return (
    <Page title="About Us">
      <Heading>This is page is About Us</Heading>
      <Body>This is the body</Body>
    </Page>
  );
};
