import { defineMessages, useIntl } from 'react-intl';
import {
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from '@trussworks/react-uswds';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import SEO from '@/components/SEO';

const FIRST_PAGE_COPY = defineMessages({
  HEADING1: {
    id: `first.page.copy.HEADING1`,
    defaultMessage: `First Page`,
    description: `page heading`,
  },
  SUMMARY_TITLE: {
    id: `first.page.copy.SUMMARY_TITLE`,
    defaultMessage: `Key Information`,
    description: `summary title`,
  },
  SUMMARY_CONTENT: {
    id: `first.page.copy.SUMMARY_CONTENT`,
    defaultMessage: `Summary content for page 1`,
    description: `summary title`,
  },
});

const IndexPage = () => {
  const intl = useIntl();

  return (
    <Layout>
      <MainGridContainer>
        <h1>{intl.formatMessage(FIRST_PAGE_COPY.HEADING1)}</h1>
        <SummaryBox>
          <SummaryBoxHeading headingLevel="h3">
            {intl.formatMessage(FIRST_PAGE_COPY.SUMMARY_TITLE)}
          </SummaryBoxHeading>
          <SummaryBoxContent>
            {intl.formatMessage(FIRST_PAGE_COPY.SUMMARY_CONTENT)}
          </SummaryBoxContent>
        </SummaryBox>
      </MainGridContainer>
    </Layout>
  );
};

export const Head = () => <SEO title={`First Page`} />;

export default IndexPage;
