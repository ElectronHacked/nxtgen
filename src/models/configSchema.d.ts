export interface IConfigStore {
  name: string;
  actions: string[];
}

export interface IConfigSchema {
  name: string;
  enums: string[];
  models: string[];
  hooks: string[];
  hocs: string[];
  contexts: string[];
  stores: IConfigStore[];
  providers: IConfigStore[];
}
