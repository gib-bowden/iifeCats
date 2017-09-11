var CatStore = ((oldCatStore) => {
	let owners = [];

	oldCatStore.getOwners = () => {
		return owners
	}

	oldCatStore.setOwners = (arr) => {
		owners = arr; 
	}

	oldCatStore.getOwnerIdByName = (str) => {
		let ownerId; 
		owners.forEach((owner) => {
			if (str.toLowerCase() === owner.name.toLowerCase()) {
				ownerId = owner.id
			}
		})
		return ownerId
	} 
	
	return oldCatStore

})(CatStore || {})