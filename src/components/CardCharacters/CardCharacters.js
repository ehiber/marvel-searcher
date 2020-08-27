import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Card, Icon, Name, Container, Img } from "./styled";
import { AppContext } from "../../store/appContext.js";

const CardCharacters = ({ localID, name, cover, isFavorite, url }) => {
	const { store, actions } = useContext(AppContext);

	const handelChangeFavorite = (e) => {
		actions.setIsFavorite(localID, !isFavorite);
	};

	return (
		<Fragment>
			<Card>
				<Container>
					<Img src={cover} />

					{store.characters[localID - 1].isFavorite ? (
						<Icon className="star-solid" onClick={handelChangeFavorite}></Icon>
					) : (
						<Icon className="star-regular" onClick={handelChangeFavorite}></Icon>
					)}

					<Name>{name}</Name>
				</Container>
			</Card>
		</Fragment>
	);
};

export default CardCharacters;

CardCharacters.propTypes = {
	localID: PropTypes.number,
	name: PropTypes.string,
	cover: PropTypes.string,
	isFavorite: PropTypes.bool,
	url: PropTypes.string,
};
