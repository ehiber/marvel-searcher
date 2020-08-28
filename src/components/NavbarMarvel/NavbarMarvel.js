import React, { useContext } from "react";
import { Link, useLocation, Redirect } from "react-router-dom";
import { AppContext } from "../../store/appContext";
import marvel from "../../assets/img/marvel.png";
import { Navbar, InputHeroe, Icon, IconNavbar } from "./Styled";

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

			<Link onClick={handleChangeFavorite} to={currentPath === "/favorites" ? "/" : "/favorites"}>
				<Icon className={currentPath === "/favorites" ? "fas fa-star" : "far fa-star"} />
			</Link>
		</Navbar>
	);
};

export default NavbarMarvel;
