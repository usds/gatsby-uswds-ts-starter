import { useIntl } from 'react-intl';
import { LanguageSwitcher } from 'gatsby-plugin-i18n-l10n';
import { GovBanner as GovBannerTruss } from '@trussworks/react-uswds';

// import Language from '../Language';

import * as styles from './GovBanner.module.scss';

const GovBanner = () => {
  const intl = useIntl();

  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.bannerContainer}>
        <GovBannerTruss
          language={intl.locale === `es-MX` ? `spanish` : `english`}
        />

        <LanguageSwitcher
          className={styles.langSwitcher}
          resolveLanguageName={(locale) =>
            locale.startsWith(`en`) ? `EN` : `ES`
          }
        />
        {/* Temporarily removing while language is translated */}
        {/* <Language isDesktop={true}/> */}
      </div>
    </div>
  );
};

export default GovBanner;
