import { useState } from 'react';
import { withPrefix } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';

import {
  Header,
  NavMenuButton,
  PrimaryNav,
  Grid,
} from '@trussworks/react-uswds';
import MainGridContainer from '@/components/MainGridContainer';
import GovBanner from '@/components/GovBanner';
import { PAGE_ENDPOINTS, PAGE_ENDPOINTS_ES } from '@/data/constants';
import { ILocation } from '@/types';

// @ts-ignore
import siteLogo from '@/static/images/usds-logo.png';
import * as styles from './AppHeader.module.scss';

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
const AppHeader = ({ location }: ILocation) => {
  /**
   * State variable to control the toggling of mobile menu button
   */

  const isHomePage = location.pathname === withPrefix(`/`);
  console.log(isHomePage);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = (): void => {
    setMobileNavOpen((prevOpen) => !prevOpen);
  };

  const HEADER = {
    LOGO_TITLE: (
      <FormattedMessage
        id={`common.nav.LOGO_TITLE`}
        defaultMessage={`Environmental Justice.gov`}
        description={`Navigate to any page. This is LOGO_TITLE in the header`}
      />
    ),
  };
  // Logo text
  const logoLine1 = HEADER.LOGO_TITLE;

  // Attempting to create this array from a map function causes the extracted
  // intl json file (after running intl:extract) to create random IDs.
  const NAV_LINKS_COPY = [
    <FormattedMessage
      key={`${PAGE_ENDPOINTS[0]}`}
      id={`common.nav.links.first.page`}
      defaultMessage={`Scorecard`}
      description={`the Scorecard nav link`}
    />,
    <FormattedMessage
      key={`${PAGE_ENDPOINTS[1]}`}
      id={`common.nav.links.second.page`}
      defaultMessage={`About`}
      description={`the About nav link`}
    />,
    <FormattedMessage
      key={`${PAGE_ENDPOINTS[2]}`}
      id={`common.nav.links.third.page`}
      defaultMessage={`Contact`}
      description={`the Contact nav link`}
    />,
  ];

  const navLinks = PAGE_ENDPOINTS.map((name, index) => {
    let navLinksActiveClassName = `usa-current`;

    // This is to address a bug with the nav component from
    // Trussworks that keeps the first page as active event
    // when navigating to another page
    if (index === 0) {
      navLinksActiveClassName =
        location.pathname === withPrefix(PAGE_ENDPOINTS[index]) ||
        location.pathname === withPrefix(PAGE_ENDPOINTS_ES[index])
          ? `usa-current`
          : ``;
    }

    return (
      <LocalizedLink
        to={name}
        key={`page-${index}`}
        activeClassName={navLinksActiveClassName}
        data-cy={`nav-link-page-${index}`}
      >
        {NAV_LINKS_COPY[index]}
      </LocalizedLink>
    );
  });

  return (
    <Header basic={true} role={`banner`}>
      {/* Banners */}
      <GovBanner />

      {/* Logo and Navigation */}
      <MainGridContainer>
        <Grid className={styles.logoNavRow} row>
          {/* Logo */}
          <Grid col={1}>
            <LocalizedLink
              to={PAGE_ENDPOINTS[0]}
              key={`first-page`}
              data-cy={`nav-link-first-page`}
            >
              <img
                className={styles.logo}
                src={siteLogo}
                alt={`${logoLine1}`}
              />
            </LocalizedLink>
          </Grid>

          {/* Logo Title */}
          <Grid col={6}>
            <LocalizedLink
              to={PAGE_ENDPOINTS[0]}
              key={`first-page`}
              className="remove-link-style"
              data-cy={`nav-link-first-page`}
            >
              <div className={styles.logoTitle}>{logoLine1}</div>
            </LocalizedLink>
          </Grid>

          {/* Nav links */}
          <Grid col={`fill`} className={styles.navLinks}>
            <NavMenuButton
              key={`mobileMenuButton`}
              onClick={toggleMobileNav}
              label="Menu"
            ></NavMenuButton>
            <PrimaryNav
              className="primary-nav"
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
