import type { NextConfig } from 'next';

import { env, validateEnvClient } from './env.schema';

const nextEnv = {
  NEXT_PUBLIC_HOST_URL: env.HOST_URL,
  NEXT_PUBLIC_CORS_ORIGIN: env.CORS_ORIGIN,
  NEXT_PUBLIC_CORS_METHODS: env.CORS_METHODS,
  NEXT_PUBLIC_CORS_HEADERS: env.CORS_HEADERS,
};

validateEnvClient(nextEnv);

const nextConfig: NextConfig = {
  /* config options here */
  env: nextEnv,
};

export default nextConfig;
