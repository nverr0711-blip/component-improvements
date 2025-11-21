import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    // Allow Storybook to be deployed under a sub-path (e.g. GitHub Pages)
    config.base = process.env.STORYBOOK_BASE_HREF ?? '/'
    return config
  },
}

export default config
