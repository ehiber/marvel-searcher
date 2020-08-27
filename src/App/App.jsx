import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContextProvider from "../store/appContext";
import NavbarMarvel from "../components/NavbarMarvel/NavbarMarvel";
import Home from "../views/Home/Home";

const App = (props) => {
	return (
		<BrowserRouter>
			<AppContextProvider>
				<NavbarMarvel />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route render={() => <h1>Not found!</h1>} />
				</Switch>
			</AppContextProvider>
		</BrowserRouter>
	);
};

export default App;
