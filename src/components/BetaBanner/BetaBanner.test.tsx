import { render } from '@testing-library/react';
import BetaBanner from './BetaBanner';

describe(`rendering of the BetaBanner`, () => {
  const { asFragment } = render(<BetaBanner />);

  it(`checks if component renders`, () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
