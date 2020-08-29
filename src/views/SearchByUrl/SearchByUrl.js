import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext.js";
import { useRouteMatch } from "react-router-dom";
import CardCharacters from "../../components/CardCharacters/CardCharacters";
import { AllCards, Container, H1 } from "./Styled.js";

export const SearchByURL = (props) => {
	const { store, actions } = useContext(AppContext);
	const match = useRouteMatch();
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
		if (match.params.characters) {
			actions.fetchGetCharactersBySearch(match.params.characters.split("&"));
		} else {
			actions.fetchGetCharactersBySearch(match.params.characters);
		}
	}, []);

	return (
		<Fragment>
			<Container>
				<AllCards>
					{store.searchByURL.done ? (
						store.searchByURL.results.length !== 0 ? (
							charactersToRenderBySearch(store.searchByURL.results).map((character) => {
								return <CardCharacters key={character.id} character={character} type="searchByURL" />;
							})
						) : (
							<h1>Thanos disappeared the results of this search, try other parameters ;)</h1>
						)
					) : (
						<H1>JARVIS is handling the search...</H1>
					)}
				</AllCards>
			</Container>
		</Fragment>
	);
};

export default SearchByURL;

CardCharacters.propTypes = {
	character: PropTypes.object,
	type: PropTypes.string,
};
