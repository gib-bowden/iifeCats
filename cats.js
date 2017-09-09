var CatStore = ((oldCatStore) => {
	let cats = [];

	oldCatStore.getCats = () => {
		return cats
	}

	oldCatStore.setCats = (arr) => {
		cats = arr; 
	}

	return oldCatStore

})(CatStore || {})