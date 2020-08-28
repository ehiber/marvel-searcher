const getState = ({ getStore, getActions, setStore }) => {
	const APIurlMarvel = "https://gateway.marvel.com/v1/public/";
	const APIpublicKey = "ae5fdb0f7fe8f2a7848c3a15e561cb85";
	const timeStamp = "1";
	const hash = "0750a5e7e851d8e2830a9d35f488eeda";

	return {
		store: {
			characters: [],
			searchByURL: {
				done: false,
				results: [],
			},
			inputHeroe: "",
			randomCharacterToRender: 0,
			favorite: false,
			allCharacters: false,
		},
		actions: {
			setFavorite: (favorite) => {
				setStore({
					favorite: !favorite,
				});
			},
			setRandomCharacterToRender: () => {
				setStore({
					randomCharacterToRender: Math.floor(Math.random() * 1493),
				});
			},
			setIsFavorite: (localID, isFavorite) => {
				let store = getStore();

				let newList = store.characters.map((character) => {
					if (character.localID === localID) {
						character.isFavorite = isFavorite;
					}

					return character;
				});

				setStore({
					characters: newList,
				});
			},
			setInputHeroe: (newInput) => {
				setStore({
					inputHeroe: newInput,
				});
			},
			setAllCharacters: () => {
				setStore({
					allCharacters: true,
				});
			},
			fetchGetCharacters: async () => {
				const store = getStore();
				let resourceType = "characters";
				let limit = 100;
				let offset = 0;
				let getAllCharacters = 15; //Rounds to get all characters

				try {
					for (let i = 0; i < getAllCharacters; i++) {
						let lengthCharacters = store.characters.length;
						let response = await fetch(
							`${APIurlMarvel}${resourceType}?ts=${timeStamp}&limit=${limit}&offset=${offset}&apikey=${APIpublicKey}&hash=${hash}`,
							{
								method: "GET",
								headers: {
									"Content-Type": "application/JSON",
								},
							}
						);

						if (response.ok) {
							let responseBody = await response.json();

							let responseBodyDATA = responseBody["data"];

							responseBodyDATA.results.map((character, index) => {
								let newCharacter = {};

								newCharacter["localID"] = index + 1 + lengthCharacters;

								newCharacter["id"] = character.id;

								newCharacter["name"] = character.name;

								newCharacter["cover"] = character.thumbnail.path + "." + character.thumbnail.extension;

								newCharacter["comics"] = character.comics;

								newCharacter["isFavorite"] = false;

								newCharacter["showModal"] = false;

								setStore({ characters: [...store.characters, newCharacter] });
							});
							offset += limit;
						} else if (response.stats == 400) {
							console.log("hubo un error");
						}
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
			},
			fetchGetCharactersBySearch: async (name) => {
				const store = getStore();
				let resourceType = "characters";

				if (name === undefined) {
					setStore({
						searchByURL: {
							done: true,
							results: store.searchByURL.results,
						},
					});
				}

				try {
					for (let i = 0; i < name.length; i++) {
						let response = await fetch(
							`${APIurlMarvel}${resourceType}?ts=${timeStamp}&name=${name[i]}&apikey=${APIpublicKey}&hash=${hash}`,
							{
								method: "GET",
								headers: {
									"Content-Type": "application/JSON",
								},
							}
						);
						console.log(
							`${APIurlMarvel}${resourceType}?ts=${timeStamp}&name=${name}&apikey=${APIpublicKey}&hash=${hash}`
						);
						if (response.ok) {
							let responseBody = await response.json();

							let responseBodyDATA = responseBody["data"];

							responseBodyDATA.results.map((character, index) => {
								let newCharacter = {};

								newCharacter["localID"] = index + 1;

								newCharacter["id"] = character.id;

								newCharacter["name"] = character.name;

								newCharacter["cover"] = character.thumbnail.path + "." + character.thumbnail.extension;

								newCharacter["comics"] = character.comics;

								newCharacter["isFavorite"] = false;

								newCharacter["showModal"] = false;

								setStore({
									searchByURL: {
										done: false,
										results: [...store.searchByURL.results, newCharacter],
									},
								});
							});
						} else if (response.stats == 400) {
							console.log("hubo un error");
						}
					}

					setStore({
						searchByURL: {
							done: true,
							results: store.searchByURL.results,
						},
					});
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
			},
		},
	};
};

export default getState;
