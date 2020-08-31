import { useState, useContext } from "react";
import { AppContext } from "../store/appContext";

export const useFavorite = (property, object) => {
	const { store, actions } = useContext(AppContext);

	let favoriteChecker = store.favorites[property].filter((favorite) => {
		return favorite.id === object.id;
	});

	const [favorite, setFavorite] = useState(favoriteChecker.length > 0 ? true : false);
	const handleChangeFavorite = (e) => {
		e.stopPropagation();
		e.preventDefault();

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
		localStorage.setItem("favorites", JSON.stringify(store.favorites));
	};

	return {
		favorite,
		handleChangeFavorite,
	};
};
