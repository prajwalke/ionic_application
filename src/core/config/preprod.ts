// environment.preprod.ts
import { AppEnvironment } from './environment.types';

export const environment: AppEnvironment = {
  name: 'preprod',
  apiBaseUrl: 'https://preprod-api.yourdomain.com',
  enableDebugTools: false,
  featureFlags: {
    newDashboard: true,
  },
};
