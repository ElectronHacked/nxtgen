import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export const LayoutHeader = styled(Header)`
  background: #fff;
  padding: 0 8px;
`;

export const LayoutHeaderTitle = styled.h1`
  margin: unset;
  font-weight: 600;
`;

export const SidebarMenuLink = styled.a`
  color: #fff;
`;
