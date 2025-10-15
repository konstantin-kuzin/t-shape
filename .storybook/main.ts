import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-docs",
        "storybook-addon-tags",
    ],

    framework: {
		name: "@storybook/react-vite",
		options: {},
	},

    viteFinal: async (config) => {
  // Добавляем babel-plugin-react-docgen для извлечения JSDoc
  return {
   ...config,
   plugins: [
    ...(config.plugins || []),
   ],
  };
 },
 typescript: {
  check: false,
  reactDocgen: 'react-docgen-typescript',
  reactDocgenTypescriptOptions: {
   shouldExtractLiteralValuesFromEnum: true,
   propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
   compilerOptions: {
    allowSyntheticDefaultImports: false,
    esModuleInterop: false,
   },
  },
 }
};
export default config;