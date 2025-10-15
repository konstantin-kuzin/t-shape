import type { Preview } from "@storybook/react-vite";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../src/lib";
import React from "react";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		status: {
			statuses: {
				released: {
					background: "#0000ff",
					color: "#ffffff",
					description: "This component is stable and released",
				},
			},
		},
	},
	globalTypes: {
		theme: {
			description: "Global theme for components",
			defaultValue: "light",
			toolbar: {
				title: "Theme",
				icon: "circlehollow",
				items: [
					{
						value: "light",
						title: "Light Theme",
						icon: "circlehollow",
					},
					{ value: "dark", title: "Dark Theme", icon: "circle" },
				],
				dynamicTitle: true,
			},
		},
	},
};


export default {
	preview,
  	tags: ['autodocs']
}

export const decorators = [
	(Story: React.ElementType, context: { globals: { theme: string } }) => {
		const theme = context.globals.theme === "dark" ? darkTheme : lightTheme;
		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Story />
			</ThemeProvider>
		);
	},
];
