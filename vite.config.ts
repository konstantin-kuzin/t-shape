import { defineConfig } from "vite";
import { copy } from "vite-plugin-copy";
import dts from "vite-plugin-dts";
import path from "path";
import react from "@vitejs/plugin-react";

// Импортируем типы для настройки react-docgen-typescript
interface ReactDocgenTypeScriptOptions {
	include?: string | string[];
	exclude?: string | string[];
	propFilter?: (prop: any, component: any) => boolean | null | undefined;
	componentNameResolver?: (exp: any, source: any) => string | null | undefined;
	getDocgenInfo?: (source: any) => any;
	docgenCollectionName?: string;
}

export default defineConfig({
	plugins: [
		copy([{ src: "src/lib/fonts/*", dest: "dist/fonts" }], {
			hook: "writeBundle",
		}),
		// поддержка синтаксиса React (JSX и прочее) с настройками для react-docgen-typescript
		react({
			// Включаем генерацию информации о компонентах для Storybook
			include: /\.(tsx|jsx)$/,
			// Настройки для извлечения JSDoc комментариев
			babel: {
				plugins: [
					[
						"babel-plugin-react-docgen",
						{
							"include": "**/*.tsx",
							"exclude": "**/*.stories.tsx"
						}
					]
				]
			}
		}),
		// генерация файла `index.d.ts`
		dts({
			insertTypesEntry: true,
		}),
	],
	build: {
		lib: {
			// путь к основному файлу библиотеки
			entry: path.resolve(__dirname, "src/lib/index.ts"),
			// название библиотеки
			name: "ReactTSLib",
			// форматы генерируемых файлов
			formats: ["es", "umd"],
			// названия генерируемых файлов
			fileName: (format) => `ui.${format}.js`,
		},
		// https://vitejs.dev/config/build-options.html#build-rollupoptions
		rollupOptions: {
			external: ["react", "react-dom", "styled-components"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"styled-components": "styled",
				},
			},
		},
	},
});
