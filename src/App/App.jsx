import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContextProvider from "../store/appContext";
import { StyledNavbarMarvel } from "../NavbarMarvel/Styled";

const App = (props) => {
	return (
		<BrowserRouter>
			<AppContextProvider>
				<StyledNavbarMarvel />
				<Switch>
					<Route exact path="/" render={() => <h1>Soy Home</h1>} />
					<Route render={() => <h1>Not found!</h1>} />
				</Switch>
			</AppContextProvider>
		</BrowserRouter>
	);
};

export default App;
