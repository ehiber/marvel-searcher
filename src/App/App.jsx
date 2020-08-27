import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContextProvider from "../store/appContext";
import NavbarMarvel from "../components/NavbarMarvel/NavbarMarvel";

const App = (props) => {
	return (
		<BrowserRouter>
			<AppContextProvider>
				<NavbarMarvel />
				<Switch>
					<Route exact path="/" render={() => <h1>Soy Home</h1>} />
					<Route render={() => <h1>Not found!</h1>} />
				</Switch>
			</AppContextProvider>
		</BrowserRouter>
	);
};

export default App;
