import { useState, useContext } from "react";
import { AppContext } from "../store/appContext";

// Customized Hook for favorites, either a character or a comic

export const useFavorite = (property, object) => {
	const { store, actions } = useContext(AppContext);

	let favoriteChecker = store.favorites[property].filter((favorite) => {
		return favorite.id === object.id;
	});

	const [favorite, setFavorite] = useState(favoriteChecker.length > 0 ? true : false);
	const handleChangeFavorite = (e) => {
		e.stopPropagation();
		e.preventDefault();
		//deciding whether it is a character or a comic and whether it should be added or replaced
		if (favorite && property === "characters") {
			setFavorite(!favorite);
			let newFavoritesArray = store.favorites[property].filter((favorite) => {
				return favorite.id !== object.id;
			});
			actions.setFavoriteCharacter(newFavoritesArray, "replace");
		} else if (!favorite && property === "characters") {
			setFavorite(!favorite);
			actions.setFavoriteCharacter(object);
		} else if (favorite && property === "comics") {
			setFavorite(!favorite);
			let newFavoritesArray = store.favorites[property].filter((favorite) => {
				return favorite.id !== object.id;
			});
			actions.setFavoriteComic(newFavoritesArray, "replace");
		} else {
			setFavorite(!favorite);
			actions.setFavoriteComic(object);
		}
		// storing in the local storage
		localStorage.setItem("favorites", JSON.stringify(store.favorites));
	};

	return {
		favorite,
		handleChangeFavorite
	};
};
