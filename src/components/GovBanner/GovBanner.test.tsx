import { render } from '@testing-library/react';
import { IntlProviderTestWrapper } from '@/test/testHelpers';
import GovBanner from './GovBanner';

describe(`rendering of GovBanner Component`, () => {
  const { asFragment } = render(
    <IntlProviderTestWrapper>
      <GovBanner />
    </IntlProviderTestWrapper>,
  );
  it(`checks if component renders`, () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
