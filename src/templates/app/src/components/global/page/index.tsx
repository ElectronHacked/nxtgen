import React, { FC, ReactNode } from 'react';
import MainLayout from 'layouts/main';
import { ILayoutHeadProps } from 'models/layoutHeadProps';

interface IPageProps extends ILayoutHeadProps {
  children?: ReactNode;
}

const Page: FC<IPageProps> = ({ children, ...props }) => {
  return <MainLayout {...props}>{children}</MainLayout>;
};

export default Page;
