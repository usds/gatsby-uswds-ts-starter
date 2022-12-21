import { render } from '@testing-library/react';
import { IntlProviderTestWrapper } from '@/test/testHelpers';
import Layout from './Layout';

describe(`rendering of Layout Component`, () => {
  const Component = () => <h1>Test</h1>;

  const { asFragment } = render(
    <IntlProviderTestWrapper>
      <Layout>
        <Component />
      </Layout>
    </IntlProviderTestWrapper>,
  );
  it(`checks if component renders`, () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
