const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-material-ui5'],
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, require.resolve('@babel/plugin-transform-react-jsx')],
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);

    config.resolve.alias = {
      ...config.resolve.alias,
      '@next/font/google': require.resolve('./nextFontGoogle'),
      '@emotion/core': toPath('../../node_modules/@emotion/react'),
      'emotion-theming': toPath('../../node_modules/@emotion/react'),
    }

    // const nextConfig = require('../next.config.js');

    return config;
  },
};
