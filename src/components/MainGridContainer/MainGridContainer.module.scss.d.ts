declare namespace MainGridContainerNamespace {
  export interface IMainGridContainerScss {
    mainGridContainerContainer: string;
  }
}

declare const MainGridContainerScssModule: MainGridContainerNamespace.IMainGridContainerScss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: MainGridContainerNamespace.IMainGridContainerScss;
};

export = MainGridContainerScssModule;
