import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import {
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from '@trussworks/react-uswds';

const ThirdPage = () => {
  return (
    <Layout>
      <MainGridContainer>
        <h1>Third Page</h1>
        <SummaryBox>
          <SummaryBoxHeading headingLevel="h3">
            Key Information
          </SummaryBoxHeading>
          <SummaryBoxContent>{`testing content`}</SummaryBoxContent>
        </SummaryBox>
      </MainGridContainer>
    </Layout>
  );
};

export const Head = () => <title>Third page</title>;

export default ThirdPage;
