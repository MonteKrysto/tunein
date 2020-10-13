import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Header } from "./components/Header";
import { Home } from "./pages/home";

function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<CSSReset />
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
