import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import AppHeader from './AppHeader';

describe(`rendering of AppHeader Component`, () => {
  it(`checks if component renders in EN`, () => {
    const { asFragment } = render(
      <IntlProvider locale={`en-US`}>
        <AppHeader />
      </IntlProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it(`checks if component renders in ES`, () => {
    const { asFragment } = render(
      <IntlProvider locale={`es-MX`}>
        <AppHeader />
      </IntlProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
