//filters the cards to be rendered through a parameter

export const charactersToRenderBySearch = (charactersToRender, filterParam) => {
	let charactersToRenderFilter = charactersToRender.filter((character) => {
		let regEx = new RegExp(filterParam.trim(), "i");

		if (character.name.search(regEx) != -1) {
			return true;
		} else {
			return false;
		}
	});
	return charactersToRenderFilter;
};
