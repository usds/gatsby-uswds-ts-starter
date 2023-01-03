import { render } from '@testing-library/react';
import { IntlProviderTestWrapper } from '@/test/testHelpers';
import SEO from './SEO';

describe(`rendering of SEO Component`, () => {
  const { asFragment } = render(
    <IntlProviderTestWrapper>
      <SEO title={`Page Title`} />
    </IntlProviderTestWrapper>,
  );
  it(`checks if component renders`, () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
