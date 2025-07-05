import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  // framework: '@storybook/nextjs', // 👈 Add this
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['..\\public', '..\\src\\assets'],
};
export default config;
