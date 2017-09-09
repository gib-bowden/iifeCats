var CatStore = ((oldCatStore) => {
	let cats = [];

	oldCatStore.getCats = () => {
		return cats
	}

	oldCatStore.setCats = (arr) => {
		cats = arr; 
	}

	oldCatStore.adoptCat = (index) => {
		cats[index].ownerId = 1; 
		let newCats = CatStore.getCats()
		let owners = CatStore.getOwners()
		CatStore.createCombinedArr(newCats, owners)
	}

	oldCatStore.getCatsByOwner = (ownerId) => {
		let filteredCats = cats.filter((cat) => {
			return cat.ownerId === ownerId; 
		})
		let owners = CatStore.getOwners()
		CatStore.createCombinedArr(filteredCats, owners)
	}

	return oldCatStore

})(CatStore || {})