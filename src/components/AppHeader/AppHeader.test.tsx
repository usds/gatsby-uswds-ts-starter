import { render } from '@testing-library/react';
import { IntlProviderTestWrapper } from '@/test/testHelpers';
import AppHeader from './AppHeader';

describe(`rendering of AppHeader Component`, () => {
  const { asFragment } = render(
    <IntlProviderTestWrapper>
      <AppHeader />
    </IntlProviderTestWrapper>,
  );
  it(`checks if component renders`, () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
