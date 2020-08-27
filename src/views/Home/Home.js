import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext.js";
import CardCharacters from "../../components/CardCharacters/CardCharacters";
import { AllCards, Container } from "./Styled.js";

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
	let randomCharacterToRender = Math.floor(Math.random() * 1493);

	useEffect(() => {
		if (store.characters.length == 1493) {
			actions.setAllCharacters();
		}
	}, [store.characters.length]);

	return (
		<Fragment>
			<Container>
				<AllCards>
					{store.allCharacters ? (
						store.inputHeroe == "" ? (
							<CardCharacters
								key={Math.random()}
								localID={store.characters[randomCharacterToRender].localID}
								name={store.characters[randomCharacterToRender].name}
								cover={store.characters[randomCharacterToRender].cover}
								isFavorite={store.characters[randomCharacterToRender].isFavorite}
								url={store.characters[randomCharacterToRender].comics.collectionURI.replace(
									"http://",
									"https://"
								)}
							/>
						) : (
							charactersToRenderBySearch(store.characters).map((character) => {
								return (
									<CardCharacters
										key={Math.random()}
										localID={character.localID}
										name={character.name}
										cover={character.cover}
										isFavorite={character.isFavorite}
										url={character.comics.collectionURI}
									/>
								);
							})
						)
					) : (
						<h1>Hoola</h1>
					)}
				</AllCards>
			</Container>
		</Fragment>
	);
};

export default Home;

CardCharacters.propTypes = {
	localID: PropTypes.number,
	name: PropTypes.string,
	cover: PropTypes.string,
	isFavorite: PropTypes.bool,
	url: PropTypes.string,
};
