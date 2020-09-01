import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext.js";
import CardCharacters from "../../components/CardCharacters/CardCharacters";
import { AllCards, Container } from "./Styled.js";
import { charactersToRenderBySearch } from "../../utils/charactersToRenderBySearch";

export const Favorites = (props) => {
	const { store } = useContext(AppContext);

	return (
		<Fragment>
			<Container>
				<AllCards>
					{charactersToRenderBySearch(store.favorites.characters, store.inputHeroe).map((character) => {
						return (
							<CardCharacters
								key={character.id}
								character={character}
								type="favorites"
								filterComicsByURL={[]}
							/>
						);
					})}
				</AllCards>
			</Container>
		</Fragment>
	);
};

export default Favorites;

CardCharacters.propTypes = {
	character: PropTypes.object,
	filterComicsByURL: PropTypes.array,
	type: PropTypes.string
};
