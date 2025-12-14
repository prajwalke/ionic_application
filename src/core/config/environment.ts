// src/core/config/environment.ts
import { environment as devEnv } from './development';
import { environment as preprodEnv } from './preprod';
import { environment as prodEnv } from './prod';

const envName = import.meta.env.VITE_APP_ENV || 'development';

const environments: any = {
  development: devEnv,
  preprod: preprodEnv,
  prod: prodEnv,
};

export const environment = environments[envName] || devEnv;
