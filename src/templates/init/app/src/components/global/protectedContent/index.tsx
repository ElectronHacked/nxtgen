import React, { FC, ReactNode } from 'react';
import { useAuth } from 'providers/auth';
import { isAuthorized } from 'utils/auth';

interface IProps {
  permissionName: string;
  children?: ReactNode;
}

export const ProtectedContent: FC<IProps> = ({ permissionName, children }) => {
  const { loginInfo } = useAuth();

  const hasRights = isAuthorized(loginInfo?.grantedPermissions, permissionName);

  return hasRights ? <React.Fragment>{children}</React.Fragment> : null;
};

export default ProtectedContent;
