import { render } from '@testing-library/react';
import BetaBanner from './BetaBanner';
import { IntlProviderTestWrapper } from '@/test/testHelpers';

describe(`rendering of the BetaBanner`, () => {
  const { asFragment } = render(
    <IntlProviderTestWrapper>
      <BetaBanner />
    </IntlProviderTestWrapper>,
  );

  it(`checks if component renders`, () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
