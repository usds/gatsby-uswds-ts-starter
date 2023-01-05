import { useState } from 'react';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';

import {
  Header,
  NavMenuButton,
  PrimaryNav,
  Grid,
} from '@trussworks/react-uswds';
import MainGridContainer from '@/components/MainGridContainer';
import GovBanner from '@/components/GovBanner';
import { PAGES_ENDPOINTS, PAGES_ENDPOINTS_ES } from '@/data/constants';
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
  const intl = useIntl();

  /**
   * State variable to control the toggling of mobile menu button
   */
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = (): void => {
    setMobileNavOpen((prevOpen) => !prevOpen);
  };

  const HEADER = {
    LOGO_TITLE: (
      <FormattedMessage
        id={`common.nav.LOGO_TITLE`}
        defaultMessage={`Your logo title goes here`}
        description={`Navigate to any page. This is LOGO_TITLE in the header`}
      />
    ),
  };
  // Logo text
  const logoLine1 = HEADER.LOGO_TITLE;

  const NAV_LINKS_COPY = defineMessages({
    ONE: {
      id: `common.nav.links.ONE`,
      defaultMessage: `First page`,
      description: `the first nav link`,
    },
    TWO: {
      id: `common.nav.links.TWO`,
      defaultMessage: `Second page`,
      description: `the second nav link`,
    },
    THREE: {
      id: `common.nav.links.THREE`,
      defaultMessage: `Third page`,
      description: `the third nav link`,
    },
  });

  // Navigation links for app
  const navLinks = [
    <LocalizedLink
      to={PAGES_ENDPOINTS.FIRST}
      key={`index-page`}
      // This logic is added to className because for some reason this
      // component keeps the first nav link active even when other nav
      // links are active. The logic below only adds the usa-current
      // class if the URL is actually on the first page.
      className={
        location.pathname === PAGES_ENDPOINTS.FIRST ||
        location.pathname === PAGES_ENDPOINTS_ES.FIRST
          ? `usa-current`
          : ``
      }
      data-cy={`nav-link-index-page`}
    >
      {intl.formatMessage(NAV_LINKS_COPY.ONE)}
    </LocalizedLink>,
    <LocalizedLink
      to={PAGES_ENDPOINTS.SECOND}
      key={`second-page`}
      activeClassName="usa-current"
      data-cy={`nav-link-second-page`}
    >
      {intl.formatMessage(NAV_LINKS_COPY.TWO)}
    </LocalizedLink>,
    <LocalizedLink
      to={PAGES_ENDPOINTS.THIRD}
      key={`third-page`}
      activeClassName="usa-current"
      data-cy={`nav-link-third-page`}
    >
      {intl.formatMessage(NAV_LINKS_COPY.THREE)}
    </LocalizedLink>,
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
            <LocalizedLink
              to={PAGES_ENDPOINTS.FIRST}
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
              to={PAGES_ENDPOINTS.FIRST}
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
