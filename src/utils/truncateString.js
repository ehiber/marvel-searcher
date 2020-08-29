export const truncateString = (str) => {
	if (str !== null) {
		if (str.length > 280) {
			return str.substr(0, 256) + "...";
		}
	}

	return str;
};
