import { FormattedMessage, FormattedDate } from 'gatsby-plugin-intl';
import * as styles from './BetaBanner.module.scss';

const METH_1_0_RELEASE_DATE = new Date(2022, 10, 22, 11, 59, 59); // Nov 22 2022
export const boldFn = (chunks: string) => <strong>{chunks}</strong>;

const BETA_BANNER_CONTENT = (
  <FormattedMessage
    id={`common.pages.alerts.banner.beta.content`}
    defaultMessage={`<bold1>This tool has been updated.</bold1> The 1.0 version of the tool was released on {relDate}.`}
    description={`Alert body that appears on landing page.`}
    values={{
      bold1: boldFn,
      relDate: (
        <FormattedDate
          value={METH_1_0_RELEASE_DATE}
          year="numeric"
          month="short"
          day="numeric"
        />
      ),
    }}
  />
);

const BetaBanner = () => {
  return (
    <div className={styles.betaBannerContainer}>
      <div className={styles.betaBanner}>{BETA_BANNER_CONTENT}</div>
    </div>
  );
};

export default BetaBanner;
