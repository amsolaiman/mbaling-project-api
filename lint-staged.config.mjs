const lintStagedConfig = {
  '**/*.{js,ts,jsx,tsx}': [
    () => 'pnpm lint',
    () => 'pnpm check:type',
    'prettier --write',
  ],
  '**/*.{json,md,yml,yaml}': ['prettier --write'],
  '**/*.(spec|test).ts?(x)': [
    'jest --bail --findRelatedTests --passWithNoTests',
  ],
};

export default lintStagedConfig;
