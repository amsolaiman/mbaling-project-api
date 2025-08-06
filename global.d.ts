import type { EnvClientSchemaType } from './env.schema';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvClientSchemaType {}
  }
}

export {};
