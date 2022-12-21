import { ReactNode } from 'react';
import AppHeader from '@/components/AppHeader';

// import * as styles from './Layout.module.scss';

export interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <AppHeader />
      <main id={`main-content`}>{children}</main>
    </>
  );
};

export default Layout;
