const ENVIRONMENT = process.env.NODE_ENV;

let config = {
	BASE_URL_MARVEL_API: process.env.BASE_URL_MARVEL_API,
	TIME_STAMP_URL: process.env.TIME_STAMP_URL,
	HASH_API_PATH: process.env.HASH_API_PATH,
	PUBLIC_KEY_API: process.env.PUBLIC_KEY_API,
	RESOURCE_TYPE: process.env.RESOURCE_TYPE,
	LIMIT_CHARACTERS: process.env.LIMIT_CHARACTERS,
	GET_ALL_CHARACTERS: process.env.GET_ALL_CHARACTERS,
	ORDER_BY_COMICS: process.env.ORDER_BY_COMICS,
	ENVIRONMENT
};

export const getConfig = () => config;
