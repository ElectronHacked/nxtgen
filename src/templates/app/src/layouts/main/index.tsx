import React, { useState, FC, ReactNode } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { LayoutHeader, LayoutHeaderTitle, SidebarMenuLink } from './styled';
import { ILayoutHeadProps } from 'models/layoutHeadProps';
import Head from './head';
import { APP_ROUTES } from 'routes';
import { IRoute } from '../../models';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface IMainLayoutProps extends ILayoutHeadProps {
  children?: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ title, children }) => {
  const [collapsed, toggleCollapsed] = useState(false);

  const renderMenuItem = (route: IRoute) => {
    const { name, icon, linkTo, displayName, children } = route;
    if (children && children.length) {
      return (
        <SubMenu
          key={name}
          title={
            <span>
              {icon && <Icon type={icon} />}
              <span>
                <SidebarMenuLink href={linkTo}>{displayName}</SidebarMenuLink>
              </span>
            </span>
          }
        >
          {children.map(child => renderMenuItem(child))}
        </SubMenu>
      );
    }

    return (
      <Menu.Item key={name}>
        {icon && <Icon type={icon} />}
        <span>
          <SidebarMenuLink href={linkTo}>{displayName}</SidebarMenuLink>
        </span>
      </Menu.Item>
    );
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Head title={title} />
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[APP_ROUTES[0].name]} mode="inline">
          {APP_ROUTES.map(route => renderMenuItem(route))}
        </Menu>
      </Sider>
      <Layout>
        <LayoutHeader>
          <LayoutHeaderTitle>{title}</LayoutHeaderTitle>
        </LayoutHeader>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Phil @ 2019</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
