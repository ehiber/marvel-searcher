import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AppContextProvider from "../store/appContext";
import NavbarMarvel from "../components/NavbarMarvel/NavbarMarvel";
import Home from "../views/Home/Home";
import Favorites from "../views/Favorites/Favorites";
import SearchByURL from "../views/SearchByUrl/SearchByUrl";

const App = (props) => {
	return (
		<HashRouter>
			<AppContextProvider>
				<NavbarMarvel />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/favorites" component={Favorites} />
					<Route exact path="/comics/:comics?/characters/:characters?" component={SearchByURL} />
					<Route render={() => <h1>Not found!</h1>} />
				</Switch>
			</AppContextProvider>
		</HashRouter>
	);
};

export default App;
