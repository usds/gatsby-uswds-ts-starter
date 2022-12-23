import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
// import messages from '@/intl/en.json'; // this is updated by `formatjs extract`

// const intlConfig = {
//   language: `en`,
//   languages: [`en`, `es`],
//   messages,
//   originalPath: `/`,
//   redirect: true,
//   routed: true,
// };

interface IIntlProviderTestWrapperProps {
  children: ReactNode;
}

/**
 * This component wraps any children with the RawIntlProvider and
 * IntlProvider to allow for component to render during unit testing.
 *
 * @param {ReactNode} children
 * @returns {ReactNode}
 */
export const IntlProviderTestWrapper = ({
  children,
}: IIntlProviderTestWrapperProps) => {
  return <IntlProvider locale={`en`}>{children}</IntlProvider>;
};
