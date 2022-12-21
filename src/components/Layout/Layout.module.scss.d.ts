declare namespace LayoutNamespace {
  export interface ILayoutScss {
    layoutContainer: string;
  }
}

declare const LayoutScssModule: LayoutNamespace.ILayoutScss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: LayoutNamespace.ILayoutScss;
};

export = LayoutScssModule;
