import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { AppContext } from "../../store/appContext";
import marvel from "../../assets/img/marvel.png";
import { Navbar, InputHeroe, Icon, IconNavbar, IconTheme, StyledLink } from "./Styled";

export const NavbarMarvel = () => {
	const { store, actions } = useContext(AppContext);

	const location = useLocation();
	const currentPath = location.pathname;

	const handleChangeInput = (e) => {
		if (e.target.value === "") {
			actions.setRandomCharacterToRender();
		}
		actions.setInputHeroe(e.target.value);
	};

	const handleChangeFavorite = (e) => {
		window.scrollTo(0, 0);
	};

	const handleTheme = (e) => {
		actions.setTheme();
	};

	return (
		<Navbar>
			<Link to="/">
				<IconNavbar src={marvel} />
			</Link>

			<InputHeroe
				type="name"
				className="fas fa-search"
				id="inputHeroes"
				placeholder="&#xF002; Buscar"
				onChange={handleChangeInput}
				value={store.inputHeroe}
			/>

			<Icon>
				<StyledLink onClick={handleChangeFavorite} to={currentPath === "/favorites" ? "/" : "/favorites"}>
					<i className={currentPath === "/favorites" ? "fas fa-star" : "far fa-star"} />
				</StyledLink>
				<IconTheme className="fas fa-circle" onClick={handleTheme} />
			</Icon>
		</Navbar>
	);
};

export default NavbarMarvel;
