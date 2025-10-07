import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme, Button } from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "center" }}>
				<Button />
			</main>
		</ThemeProvider>
	);
}

export default App;
