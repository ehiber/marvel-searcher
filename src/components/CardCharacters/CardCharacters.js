import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Card, Icon, Name, Container, Img } from "./styled";
import { useFavorite } from "../../utils/useFavorite";
import ModalComics from "../ModalComic/ModalComic";
import { AppContext } from "../../store/appContext.js";

const CardCharacters = ({ character, type, filterComicsByURL }) => {
	const { store, actions } = useContext(AppContext);
	const { favorite, handleChangeFavorite } = useFavorite("characters", character);

	const handleFetchModal = async (e, url, id) => {
		await actions.fetchGetComics(url);
		actions.setShowModal(id, true, type);
	};

	return (
		<Fragment>
			<Card>
				<Container>
					<Img
						src={character.cover}
						onClick={(e) => {
							handleFetchModal(e, character.comics, character.id);
						}}
					/>

					<span onClick={handleChangeFavorite}>
						{favorite ? <Icon className="fas fa-star" /> : <Icon className="far fa-star" />}
					</span>

					<Name>{character.name}</Name>

					{/* para mostrar el modal de ese personje */}
					{character.showModal && (
						<ModalComics
							nameCharacter={character.name}
							handleOuterClick={(e) => {
								actions.setShowModal(character.id, false, type);
							}}
							filterComicsByURL={filterComicsByURL}
						/>
					)}
				</Container>
			</Card>
		</Fragment>
	);
};

export default CardCharacters;

CardCharacters.propTypes = {
	character: PropTypes.object,
	type: PropTypes.string,
	filterComicsByURL: PropTypes.array
};
