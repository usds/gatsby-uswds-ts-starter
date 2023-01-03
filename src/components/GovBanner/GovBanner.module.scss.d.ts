declare namespace GovBannerNamespace {
  export interface IGovBannerScss {
    fullScreenContainer: string;
    bannerContainer: string;
    langSwitcher: string;
  }
}

declare const GovBannerScssModule: GovBannerNamespace.IGovBannerScss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: GovBannerNamespace.IGovBannerScss;
};

export = GovBannerScssModule;
