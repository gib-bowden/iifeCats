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
		cats = CatStore.getCats()
		let owners = CatStore.getOwners()
		CatStore.createCombinedArr(cats, owners)
	}

	oldCatStore.getCatsByOwner = (ownerId) => {
		cats = cats.filter((cat) => {
			return cat.ownerId === ownerId; 
		})
		let owners = CatStore.getOwners()
		CatStore.createCombinedArr(cats, owners)
	}

	return oldCatStore

})(CatStore || {})