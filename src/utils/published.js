// Formatting the date

export const published = (date) => {
	let dateFormat = new Date(date);

	let dateString = dateFormat.toString();

	let finalDate = dateString.slice(4, 10) + "," + dateString.slice(11, 15);

	return finalDate;
};
