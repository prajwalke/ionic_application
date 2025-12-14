// environment.development.ts
import { AppEnvironment } from './environment.types';

export const environment: AppEnvironment = {
  name: 'development',
  apiBaseUrl: 'https://dev-api.yourdomain.com',
  enableDebugTools: true,
  featureFlags: {
    newDashboard: true,
  },
};
