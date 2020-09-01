import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext.js";
import { useRouteMatch } from "react-router-dom";
import CardCharacters from "../../components/CardCharacters/CardCharacters";
import { AllCards, Container, H1 } from "./Styled.js";
import { charactersToRenderBySearch } from "../../utils/charactersToRenderBySearch"

export const SearchByURL = (props) => {
	const { store, actions } = useContext(AppContext);
	const match = useRouteMatch();
	
	useEffect(() => {
		if (match.params.characters) { //si hay parametro separamos por &
			actions.fetchGetCharactersBySearch(match.params.characters.split("&"));
		} else {
			actions.fetchGetCharactersBySearch(match.params.characters);
		}
	}, []);

	const filterComicsByURL = match.params.comics ? match.params.comics.split("&") : []; //if there is no parameter leave empty

	return (
		<Fragment>
			<Container>
				<AllCards>
					{store.searchByURL.done ? (
						store.searchByURL.results.length !== 0 ? (
							charactersToRenderBySearch(store.searchByURL.results,store.inputHeroe).map((character) => {
								return (
									<CardCharacters
										key={character.id}
										character={character}
										type="searchByURL"
										filterComicsByURL={filterComicsByURL}
									/>
								);
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
	filterComicsByURL: PropTypes.array
};
