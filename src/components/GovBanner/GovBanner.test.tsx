import createComponentWithIntl from '@/test/testHelpers';

import GovBanner from './GovBanner';

describe(`rendering of GovBanner Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(<GovBanner />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
