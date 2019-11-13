export interface IAppConfigManager {
  baseUrl?: string;
  gaTrackingId?: string;
  appInsightsInstrumentationKey?: string;
}

const devConfig: IAppConfigManager = {
  baseUrl: 'http://base-url.com',
  gaTrackingId: 'UA-xxxxxx-1',
  appInsightsInstrumentationKey: '6fac26c0-b4f3-4c27-8d37-19c73bc9d684',
};

export default class ConfigManager {
  public config: IAppConfigManager;

  constructor() {
    try {
      this.config = process.env.NODE_ENV === 'production' ? (window as any).__APP_CONFIG__ : devConfig;
    } catch (error) {
      this.config = devConfig;
    }
  }
  getConfig(): IAppConfigManager {
    try {
      return process.env.NODE_ENV === 'production' ? (window as any).__APP_CONFIG__ : devConfig;
    } catch (error) {
      return devConfig;
    }
  }
}
