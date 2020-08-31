import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext.js";
import CardCharacters from "../../components/CardCharacters/CardCharacters";
import { AllCards, Container } from "./Styled.js";

export const Favorites = (props) => {
	const { store, actions } = useContext(AppContext);

	const charactersToRenderBySearch = (charactersToRender) => {
		let charactersToRenderFilter = charactersToRender.filter((character) => {
			let regEx = new RegExp(store.inputHeroe.trim(), "i");

			if (character.name.search(regEx) != -1) {
				return true;
			} else {
				return false;
			}
		});
		return charactersToRenderFilter;
	};

	return (
		<Fragment>
			<Container>
				<AllCards>
					{charactersToRenderBySearch(store.favorites.characters).map((character) => {
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
	type: PropTypes.string,
};
