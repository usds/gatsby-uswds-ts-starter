import { render } from '@testing-library/react';
import { IntlProviderTestWrapper } from '@/test/testHelpers';
import MainGridContainer from './MainGridContainer';

describe(`rendering of MainGridContainer Component`, () => {
  const Component = () => <h1>Test</h1>;

  it(`checks if component renders with Full width true`, () => {
    const { asFragment } = render(
      <IntlProviderTestWrapper>
        <MainGridContainer fullWidth={true}>
          <Component />
        </MainGridContainer>
      </IntlProviderTestWrapper>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it(`checks if component renders with Full width false`, () => {
    const { asFragment } = render(
      <IntlProviderTestWrapper>
        <MainGridContainer fullWidth={false}>
          <Component />
        </MainGridContainer>
      </IntlProviderTestWrapper>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
