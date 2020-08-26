const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorite: false,
		},
		actions: {
			// USADA PARA ESCOGER FAVORITOS
			setFavorite: (favorite) => {
				setStore({
					favorite: !favorite,
				});
			},
		},
	};
};

export default getState;
