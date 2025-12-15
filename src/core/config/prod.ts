// environment.prod.ts
import { AppEnvironment } from './types';

export const environment: AppEnvironment = {
  name: 'prod',
  apiBaseUrl: 'https://api.yourdomain.com',
  enableDebugTools: false,
  featureFlags: {
    newDashboard: false,
  },
};
