import createComponentWithIntl from '@/test/testHelpers';

import SEO from './SEO';

describe(`rendering of SEO Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(<SEO title={`Page Title`} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
