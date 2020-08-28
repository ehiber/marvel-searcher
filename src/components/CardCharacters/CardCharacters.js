import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Card, Icon, Name, Container, Img } from "./styled";
import { AppContext } from "../../store/appContext.js";
import { useFavorite } from "../../utils/useFavorite";

const CardCharacters = ({ character, check, setCheck }) => {
	const { store, actions } = useContext(AppContext);

	const { favorite, handleChangeFavorite } = useFavorite("characters", character, check, setCheck);

	return (
		<Fragment>
			<Card>
				<Container>
					<Img src={character.cover} />

					<span onClick={handleChangeFavorite}>
						{favorite ? <Icon className="fas fa-star" /> : <Icon className="far fa-star" />}
					</span>

					<Name>{character.name}</Name>
				</Container>
			</Card>
		</Fragment>
	);
};

export default CardCharacters;

CardCharacters.propTypes = {
	character: PropTypes.object,
	check: PropTypes.bool,
	setCheck: PropTypes.func,
};
