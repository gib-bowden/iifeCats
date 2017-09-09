var CatStore = ((oldCatStore) => {
	let owners = [];

	oldCatStore.getOwners = () => {
		return owners
	}

	oldCatStore.setOwners = (arr) => {
		owners = arr; 
	}

	return oldCatStore

})(CatStore || {})