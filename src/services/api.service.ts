// environment.types.ts
export interface AppEnvironment {
  name: 'development' | 'preprod' | 'prod';
  apiBaseUrl: string;
  enableDebugTools: boolean;
  featureFlags?: Record<string, boolean>;
}
