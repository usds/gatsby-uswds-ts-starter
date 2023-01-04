import { IntlProvider } from 'react-intl';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe(`rendering of Layout Component`, () => {
  const Component = () => <h1>Test</h1>;

  it(`checks if component renders in en-US`, () => {
    const { asFragment } = render(
      <IntlProvider locale="en-US">
        <Layout title={`First`}>
          <Component />
        </Layout>
      </IntlProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it(`checks if component renders in es-MX`, () => {
    const { asFragment } = render(
      <IntlProvider locale="es-MX">
        <Layout title={`Primera`}>
          <Component />
        </Layout>
      </IntlProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
