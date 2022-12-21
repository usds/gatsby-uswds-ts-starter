import { GovBanner as GovBannerTruss } from '@trussworks/react-uswds';
import { useIntl } from 'gatsby-plugin-intl';

// import Language from '../Language';

import * as styles from './GovBanner.module.scss';

const GovBanner = () => {
  const intl = useIntl();

  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.bannerContainer}>
        <GovBannerTruss
          language={intl.locale === `es` ? `spanish` : `english`}
        />
        {/* Temporarily removing while language is translated */}
        {/* <Language isDesktop={true}/> */}
      </div>
    </div>
  );
};

export default GovBanner;
