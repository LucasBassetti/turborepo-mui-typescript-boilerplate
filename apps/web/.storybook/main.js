const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  framework: {
    name: '@storybook/nextjs',
    options: {
      fastRefresh: true,
      nextConfigPath: path.resolve(__dirname, '../next.config.js')
    }
  },
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, require.resolve('@babel/plugin-transform-react-jsx')],
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);

    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': toPath('../../node_modules/@emotion/react'),
      'emotion-theming': toPath('../../node_modules/@emotion/react'),
    }

    // const nextConfig = require('../next.config.js');

    return config;
  },
};
