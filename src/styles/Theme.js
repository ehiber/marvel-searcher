import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "../store/appContext";
import PropTypes from "prop-types";

export const Theme = ({ children }) => {
	const { store, actions } = useContext(AppContext);

	return <ThemeProvider theme={store.theme}>{children}</ThemeProvider>;
};

export default Theme;

Theme.propTypes = {
	children: PropTypes.node
};
