declare namespace SEONamespace {
  export interface ISEOScss {
    sEOContainer: string;
  }
}

declare const SEOScssModule: SEONamespace.ISEOScss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: SEONamespace.ISEOScss;
};

export = SEOScssModule;
