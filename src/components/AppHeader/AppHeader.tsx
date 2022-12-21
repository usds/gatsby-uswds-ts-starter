import { useState } from 'react';
import { Link } from 'gatsby-plugin-intl';
import {
  Header,
  NavMenuButton,
  PrimaryNav,
  Grid,
} from '@trussworks/react-uswds';
import MainGridContainer from '@/components/MainGridContainer';
import GovBanner from '@/components/GovBanner';

// import Language from '../Language';

// @ts-ignore
import siteLogo from '@/static/images/usds-logo.png';
import * as styles from './AppHeader.module.scss';
import { HEADER } from '@/data/copy/common';
import { PAGES_ENDPOINTS } from '@/data/constants';

/**
 * The AppHeader component will control how the header looks for both mobile and desktop
 *
 * The Header is defined as
 * 1. One Gov Banners (ie, official gov website)
 * 2. Logo and Nav Links Row
 * 3. Any Alerts
 *
 * @param {Location} location
 * @return {JSX.Element}
 */
const AppHeader = () => {
  /**
   * State variable to control the toggling of mobile menu button
   */
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = (): void => {
    setMobileNavOpen((prevOpen) => !prevOpen);
  };

  // Logo text
  const logoLine1 = HEADER.LOGO_TITLE;

  // Navigation links for app
  const navLinks = [
    <Link
      to={PAGES_ENDPOINTS.FIRST}
      key={`index-page`}
      activeClassName="usa-current"
      data-cy={`nav-link-index-page`}
    >
      {HEADER.FIRST_PAGE}
    </Link>,
    <Link
      to={PAGES_ENDPOINTS.SECOND}
      key={`second-page`}
      activeClassName="usa-current"
      data-cy={`nav-link-second-page`}
    >
      {HEADER.SECOND_PAGE}
    </Link>,
    <Link
      to={PAGES_ENDPOINTS.THIRD}
      key={`third-page`}
      activeClassName="usa-current"
      data-cy={`nav-link-third-page`}
    >
      {HEADER.THIRD_PAGE}
    </Link>,
    // Temporarily removing language link until translation is completed
    // <div key={'language'}>
    //   <Language isDesktop={false}/>
    // </div>,
  ];

  return (
    <Header basic={true} role={`banner`}>
      {/* Banners */}
      <GovBanner />

      {/* Logo and Navigation */}
      <MainGridContainer>
        <Grid className={styles.logoNavRow} row>
          {/* Logo */}
          <Grid col={1}>
            <Link
              to={PAGES_ENDPOINTS.FIRST}
              key={`first-page`}
              data-cy={`nav-link-first-page`}
            >
              <img
                className={styles.logo}
                src={siteLogo}
                alt={`${logoLine1}`}
              />
            </Link>
          </Grid>

          {/* Logo Title */}
          <Grid col={6}>
            <Link
              to={PAGES_ENDPOINTS.FIRST}
              key={`first-page`}
              className="remove-link-style"
              data-cy={`nav-link-first-page`}
            >
              <div className={styles.logoTitle}>{logoLine1}</div>
            </Link>
          </Grid>

          {/* Nav links */}
          <Grid col={`fill`} className={styles.navLinks}>
            <NavMenuButton
              key={`mobileMenuButton`}
              onClick={toggleMobileNav}
              label="Menu"
            ></NavMenuButton>
            <PrimaryNav
              items={navLinks}
              mobileExpanded={mobileNavOpen}
              onToggleMobileNav={toggleMobileNav}
            ></PrimaryNav>
          </Grid>
        </Grid>
      </MainGridContainer>
    </Header>
  );
};

export default AppHeader;
