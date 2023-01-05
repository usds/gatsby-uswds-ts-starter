import createComponentWithIntl from '@/test/testHelpers';

import Layout from './Layout';

describe(`rendering of Layout Component`, () => {
  const Component = () => <h1>Test</h1>;

  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(
      <Layout location={location} title={`First`}>
        <Component />
      </Layout>,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
