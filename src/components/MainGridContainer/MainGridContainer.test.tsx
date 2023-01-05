import createComponentWithIntl from '@/test/testHelpers';

import MainGridContainer from './MainGridContainer';

describe(`rendering of MainGridContainer Component`, () => {
  const Component = () => <h1>Test</h1>;

  it(`checks if component renders with Full width true`, () => {
    const component = createComponentWithIntl(
      <MainGridContainer fullWidth={true}>
        <Component />
      </MainGridContainer>,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`checks if component renders with Full width false`, () => {
    const component = createComponentWithIntl(
      <MainGridContainer fullWidth={false}>
        <Component />
      </MainGridContainer>,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
