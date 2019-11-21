export interface IPageConfig {
  name: string;
  path: string;
}

export interface IConfigStore {
  name: string;
  actions: string[];
}

export interface IConfigSchema {
  name: string;
  preprocessor: string;
  googleAnalytics: boolean;
  applicationInsights: boolean;
  pages: IPageConfig[];
  components: string[];
  enums: string[];
  models: string[];
  hooks: string[];
  apis: string[];
  hocs: string[];
  contexts: string[];
  stores: IConfigStore[];
}
