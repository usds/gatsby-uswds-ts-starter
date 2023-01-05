import { ReactNode } from 'react';

import AppHeader from '@/components/AppHeader';
import SEO from '@/components/SEO';

// import * as styles from './Layout.module.scss';

export interface ILayoutProps {
  children: ReactNode;
  location: Location;
  title: string;
}

const Layout = ({ children, location, title }: ILayoutProps) => {
  return (
    <>
      <SEO title={title} />
      <AppHeader location={location} />
      <main id={`main-content`}>{children}</main>
    </>
  );
};

export default Layout;
