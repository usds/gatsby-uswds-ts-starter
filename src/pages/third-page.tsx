import { defineMessages, useIntl } from 'react-intl';
import {
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from '@trussworks/react-uswds';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import { ILocation } from '@/types';

const THIRD_PAGE_COPY = defineMessages({
  HEADING1: {
    id: `third.page.copy.HEADING1`,
    defaultMessage: `Third Page`,
    description: `page heading`,
  },
  SUMMARY_TITLE: {
    id: `third.page.copy.SUMMARY_TITLE`,
    defaultMessage: `Key Information`,
    description: `summary title`,
  },
  SUMMARY_CONTENT: {
    id: `third.page.copy.SUMMARY_CONTENT`,
    defaultMessage: `Summary content for page 3`,
    description: `summary title`,
  },
});

const ThirdPage = ({ location }: ILocation) => {
  const intl = useIntl();

  return (
    <Layout
      location={location}
      title={intl.formatMessage(THIRD_PAGE_COPY.HEADING1)}
    >
      <MainGridContainer>
        <h1>{intl.formatMessage(THIRD_PAGE_COPY.HEADING1)}</h1>
        <SummaryBox>
          <SummaryBoxHeading headingLevel="h3">
            {intl.formatMessage(THIRD_PAGE_COPY.SUMMARY_TITLE)}
          </SummaryBoxHeading>
          <SummaryBoxContent>
            {intl.formatMessage(THIRD_PAGE_COPY.SUMMARY_CONTENT)}
          </SummaryBoxContent>
        </SummaryBox>
      </MainGridContainer>
    </Layout>
  );
};

export default ThirdPage;
