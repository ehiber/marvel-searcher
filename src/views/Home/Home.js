import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext.js";
import CardCharacters from "../../components/CardCharacters/CardCharacters";
import { AllCards, Container, H1 } from "./Styled.js";

export const Home = (props) => {
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

	useEffect(() => {
		if (store.characters.length == 1493) {
			actions.setAllCharacters();
		}
	}, [store.characters.length]);

	useEffect(() => {
		actions.setRandomCharacterToRender();
	}, []);

	const filterComicsByURL = [];

	return (
		<Fragment>
			<Container>
				<AllCards>
					{store.allCharacters ? (
						store.inputHeroe == "" ? (
							<CardCharacters
								key={store.characters[store.randomCharacterToRender].id}
								character={store.characters[store.randomCharacterToRender]}
								filterComicsByURL={filterComicsByURL}
							/>
						) : (
							charactersToRenderBySearch(store.characters).map((character) => {
								return (
									<CardCharacters
										key={character.id}
										character={character}
										filterComicsByURL={filterComicsByURL}
									/>
								);
							})
						)
					) : (
						<H1>The whole Marvel Universe is coming...</H1>
					)}
				</AllCards>
			</Container>
		</Fragment>
	);
};

export default Home;

CardCharacters.propTypes = {
	character: PropTypes.object,
	filterComicsByURL: PropTypes.array
};
