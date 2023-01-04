import { ReactNode } from 'react';

import AppHeader from '@/components/AppHeader';
import SEO from '@/components/SEO';

// import * as styles from './Layout.module.scss';

export interface ILayoutProps {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: ILayoutProps) => {
  return (
    <>
      <SEO title={title} />
      <AppHeader />
      <main id={`main-content`}>{children}</main>
    </>
  );
};

export default Layout;
