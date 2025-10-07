import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme} from "./lib/theme";
import { Badge } from "./lib";

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<main style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "center" }}>
				<Badge text="Primary" mode="primary" />
				<Badge text="Secondary" mode="secondary" />
				<Badge text="Neutral" mode="neutral" />
				<Badge text="" mode="neutral" />
			</main>
		</ThemeProvider>
	);
}

export default App;
