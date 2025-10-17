import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme, Button, Card } from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "center" }}>
				<Card interactive={false} buttonText="Превед"/>
				<Card interactive={true} />
			</main>
		</ThemeProvider>
	);
}

export default App;
