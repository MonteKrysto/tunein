import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Header } from "./components/Header";
import { Home } from "./pages/home";
import { Detail } from "./pages/detail";
import { ReactQueryDevtools } from "react-query-devtools";
import { Discover } from "./pages/discover";
import { StationList } from './pages/stationList';

function App() {
	return (
		<>
			<ReactQueryDevtools initialIsOpen={false} />
			<ThemeProvider>
				<BrowserRouter>
					<CSSReset />
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/detail/:id" component={Detail} />
						<Route exact path="/discover" component={Discover} />
						<Route exact path="/discover/:tag" component={StationList} />
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
}

export default App;
