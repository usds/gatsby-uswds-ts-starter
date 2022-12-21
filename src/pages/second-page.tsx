import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import {
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from '@trussworks/react-uswds';

const SecondPage = () => {
  return (
    <Layout>
      <MainGridContainer>
        <h1>Second Page</h1>
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

export const Head = () => <title>Second page</title>;

export default SecondPage;
