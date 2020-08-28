import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContextProvider from "../store/appContext";
import NavbarMarvel from "../components/NavbarMarvel/NavbarMarvel";
import Home from "../views/Home/Home";
import SearchByURL from "../views/SearchByUrl/SearchByUrl";

const App = (props) => {
	return (
		<BrowserRouter>
			<AppContextProvider>
				<NavbarMarvel />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/comics/:comics?/characters/:characters?" component={SearchByURL} />
					<Route render={() => <h1>Not found!</h1>} />
				</Switch>
			</AppContextProvider>
		</BrowserRouter>
	);
};

export default App;
