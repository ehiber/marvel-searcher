import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../store/appContext";
import marvel from "../../assets/img/marvel.png";
import { Navbar, InputHeroe, Icon, IconNavbar } from "./Styled";

export const NavbarMarvel = () => {
	const { store, actions } = useContext(AppContext);

	const handleChangeInput = (e) => {
		actions.setInputHeroe(e.target.value);
	};

	const handleChangeFavorite = (e) => {
		actions.setFavorite(store.favorite);
	};

	return (
		<Navbar>
			<Link to="/">
				<IconNavbar src={marvel} className="icon-navbar-marvel" />
			</Link>

			<InputHeroe
				type="name"
				className="fas fa-search"
				id="inputHeroes"
				placeholder="&#xF002; Buscar"
				onChange={handleChangeInput}
				value={store.inputHeroe}
			/>

			{store.favorite ? (
				<Icon className="fas fa-star" onClick={handleChangeFavorite}></Icon>
			) : (
				<Icon className="far fa-star" onClick={handleChangeFavorite}></Icon>
			)}
		</Navbar>
	);
};

export default NavbarMarvel;
