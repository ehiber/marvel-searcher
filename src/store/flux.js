import { getConfig } from "../../config";

const getState = ({ getStore, getActions, setStore }) => {
	const APIurlMarvel = getConfig().BASE_URL_MARVEL_API;
	const APIpublicKey = getConfig().PUBLIC_KEY_API;
	const timeStamp = getConfig().TIME_STAMP_URL;
	const hash = getConfig().HASH_API_PATH;

	return {
		store: {
			characters: [], //saves all the characters to be rendered
			searchByURL: {
				//save all the bucasdos characters by ulr to render
				done: false,
				results: []
			},
			inputHeroe: "", //with this input value the filtering of cards to be rendered is done
			randomCharacterToRender: 0, //with this we will know which random character to render
			comicsToRender: [],
			comicToRender: { index: 0, redirect: false }, //used to render the preview of the comic
			favorites: {
				//favorites also saved in the storage
				characters: [],
				comics: []
			},
			allCharacters: false,
			theme: {
				text: "black",
				bg: "white",
				icon: "rgb(138,138,138)",
				placeholder: "rgb(224,224,224)"
			},
			otherTheme: {
				text: "white",
				bg: "black",
				icon: "white",
				placeholder: "white"
			}
		},
		actions: {
			setFavorites: (favorites) => {
				setStore({
					favorites: favorites
				});
			},
			setTheme: () => {
				let store = getStore();
				setStore({
					theme: store.otherTheme,
					otherTheme: store.theme
				});
			},
			setFavoriteCharacter: (characters, action) => {
				//as appropriate add a new favorite or replace the entire list
				let store = getStore();
				if (action === "replace") {
					setStore({
						favorites: {
							characters: characters,
							comics: store.favorites.comics
						}
					});
				} else {
					setStore({
						favorites: {
							characters: [...store.favorites.characters, characters],
							comics: store.favorites.comics
						}
					});
				}
			},
			setFavoriteComic: (comics, action) => {
				let store = getStore();
				if (action === "replace") {
					setStore({
						favorites: {
							characters: store.favorites.characters,
							comics: comics
						}
					});
				} else {
					setStore({
						favorites: {
							characters: store.favorites.characters,
							comics: [...store.favorites.comics, comics]
						}
					});
				}
			},
			setRandomCharacterToRender: () => {
				setStore({
					randomCharacterToRender: Math.floor(Math.random() * 1493)
				});
			},
			setInputHeroe: (newInput) => {
				setStore({
					inputHeroe: newInput
				});
			},
			setAllCharacters: () => {
				setStore({
					allCharacters: true
				});
			},
			setComicToRender: (id, redirect) => {
				setStore({
					comicToRender: { index: id, redirect: redirect }
				});
			},
			setShowModal: (id, showModal, type) => {
				//used to display the character's mode according to the place where the action is requested
				let store = getStore();

				let charactersToMap = "";

				if (type === "searchByURL") {
					charactersToMap = store.searchByURL.results;
				} else if (type === "favorites") {
					charactersToMap = store.favorites.characters;
				} else {
					charactersToMap = store.characters;
				}

				let newList = charactersToMap.map((character) => {
					if (character.id === id) {
						character.showModal = showModal;
					}

					return character;
				});

				if (type === "searchByURL") {
					setStore({
						searchByURL: {
							done: store.searchByURL.done,
							results: newList
						}
					});
				} else if (type === "favorites") {
					setStore({
						favorites: {
							characters: newList,
							comics: store.favorites.comics
						}
					});
				} else {
					setStore({
						characters: newList
					});
				}
			},
			fetchGetCharacters: async () => {
				const store = getStore();
				let resourceType = getConfig().RESOURCE_TYPE;
				let limit = getConfig().LIMIT_CHARACTERS;
				let offset = 0; //skip the characters that are already in the store
				let getAllCharacters = 15; //Rounds to get all characters

				try {
					for (let i = 0; i < getAllCharacters; i++) {
						//15 fetch are made to bring all the characters
						let response = await fetch(
							`${APIurlMarvel}${resourceType}?ts=${timeStamp}&limit=${limit}&offset=${offset}&apikey=${APIpublicKey}&hash=${hash}`,
							{
								method: "GET",
								headers: {
									"Content-Type": "application/JSON"
								}
							}
						);

						if (response.ok) {
							let responseBody = await response.json();

							let responseBodyDATA = responseBody["data"];

							responseBodyDATA.results.map((character) => {
								let newCharacter = {};
								//we keep the necessary information
								newCharacter["id"] = character.id;
								newCharacter["name"] = character.name;
								newCharacter["cover"] = character.thumbnail.path + "." + character.thumbnail.extension;
								newCharacter["comics"] = character.comics.collectionURI.replace("http://", "https://");
								newCharacter["showModal"] = false;

								setStore({ characters: [...store.characters, newCharacter] });
							});
						} else if (response.stats == 400) {
							// console.log("hubo un error");
						}
						offset += 100; //+100 because that's the limit of characters
					}
				} catch (error) {
					// console.log("something failed");
					// console.log(error);
				}
			},
			fetchGetCharactersBySearch: async (name) => {
				const store = getStore();
				let resourceType = getConfig().RESOURCE_TYPE;

				if (name === undefined) {
					//if there is no parameter you can't do the search
					setStore({
						searchByURL: {
							done: true,
							results: store.searchByURL.results
						}
					});
				}

				try {
					for (let i = 0; i < name.length; i++) {
						let response = await fetch(
							`${APIurlMarvel}${resourceType}?ts=${timeStamp}&name=${name[i]}&apikey=${APIpublicKey}&hash=${hash}`,
							{
								method: "GET",
								headers: {
									"Content-Type": "application/JSON"
								}
							}
						);

						if (response.ok) {
							let responseBody = await response.json();

							let responseBodyDATA = responseBody["data"];

							responseBodyDATA.results.map((character) => {
								let newCharacter = {};

								newCharacter["id"] = character.id;
								newCharacter["name"] = character.name;
								newCharacter["cover"] = character.thumbnail.path + "." + character.thumbnail.extension;
								newCharacter["comics"] = character.comics.collectionURI.replace("http://", "https://");
								newCharacter["showModal"] = false;

								setStore({
									searchByURL: {
										done: false,
										results: [...store.searchByURL.results, newCharacter]
									}
								});
							});
						} else if (response.stats == 400) {
							// console.log("hubo un error");
						}
					}

					setStore({
						searchByURL: {
							done: true,
							results: store.searchByURL.results
						}
					});
				} catch (error) {
					// console.log("something failed");
					// console.log(error);
				}
			},
			fetchGetComics: async (url) => {
				const store = getStore();
				const orderBy = getConfig().ORDER_BY_COMICS;
				try {
					let response = await fetch(
						`${url}?ts=${timeStamp}&orderBy=${orderBy}&apikey=${APIpublicKey}&hash=${hash}`,
						{
							method: "GET",
							headers: {
								"Content-Type": "application/JSON"
							}
						}
					);

					if (response.ok) {
						let responseBody = await response.json();

						let responseBodyDATA = responseBody["data"];

						let comicsToRender = responseBodyDATA.results.map((comic) => {
							let newComic = {};

							newComic["id"] = comic.id;

							newComic["title"] = comic.title;

							newComic["cover"] = comic.thumbnail.path + "." + comic.thumbnail.extension;

							newComic["date"] = comic.dates[0].date;

							newComic["description"] = comic.description;

							newComic["creators"] = comic.creators;

							newComic["url"] = comic.resourceURI.replace("http://", "https://");

							return newComic;
						});

						setStore({ comicsToRender: comicsToRender });
					} else if (response.stats == 400) {
						// console.log("hubo un error");
					}
				} catch (error) {
					// console.log("something failed");
					// console.log(error);
				}
			}
		}
	};
};

export default getState;
