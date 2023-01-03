import React from 'react';

// import * as styles from './SEO.module.scss';

export interface ISEOProps {
  children?: React.ReactNode;
  title: string;
}

const SEO = ({ title }: ISEOProps) => {
  // This SEO boilerplate was inspired by https://gist.github.com/nunosans/3028849

  return (
    <>
      {/* Priority tags. These must come first. */}
      <meta charSet="utf-8" />

      {/* Render Chrome if available or using latest version of Internet Explorer (Recommended). */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge; chrome=1" />

      {/* Document Title */}
      <title>{title}</title>

      {/* Open Graph Meta Tags (ogp.me) */}
      <meta property="og:site_name" content="Site Name" />
      <meta property="og:title" content="Page Title" />
      <meta property="og:description" content="Description of this web page" />
    </>
  );
};

export default SEO;
