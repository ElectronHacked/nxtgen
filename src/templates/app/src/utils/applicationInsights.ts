import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

import ConfigManager from 'utils/configManager';

export const initAi = () => {
  const { appInsightsInstrumentationKey } = new ConfigManager().config;

  if (process.browser && process.env.NODE_ENV === 'production') {
    import('history').then(({ createBrowserHistory }) => {
      const browserHistory = createBrowserHistory({ basename: '' });
      const reactPlugin = new ReactPlugin() as any;
      const appInsights = new ApplicationInsights({
        config: {
          instrumentationKey: appInsightsInstrumentationKey,
          extensions: [reactPlugin],
          extensionConfig: {
            [reactPlugin.identifier]: { history: browserHistory },
          },
          enableAutoRouteTracking: true,
        },
      });
      appInsights.loadAppInsights();
    });
  }
};
