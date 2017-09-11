var CatStore = ((oldCatStore) => {
	let cats = [];
	let filteredCats = []; 

	oldCatStore.getCats = () => {
		return cats
	}

	oldCatStore.getFilteredCats = () => {
		return filteredCats; 
	}

	oldCatStore.setCats = (arr) => {
		cats = arr; 
	}

	oldCatStore.setFilteredCats = (arr) => {
		return filteredCats = arr; 
	}

	oldCatStore.adoptCat = (index, ownerId) => {
		let adoptableCats = []; 
		if (CatStore.getFilteredCats().length === 0) {
			shownCats = CatStore.getCats(); 
		}
		else {
			shownCats = CatStore.getFilteredCats(); 
		}
		shownCats[index].ownerId = ownerId; 
		let owners = CatStore.getOwners()
		CatStore.createCombinedArr(shownCats, owners)
	}

	oldCatStore.getCatsByOwner = (ownerName) => {
		let ownerId = CatStore.getOwnerIdByName(ownerName)
		filteredCats = cats.filter((cat) => {
			return cat.ownerId === ownerId; 
		})
		let owners = CatStore.getOwners()
		CatStore.createCombinedArr(filteredCats, owners)
	}

	return oldCatStore

})(CatStore || {})