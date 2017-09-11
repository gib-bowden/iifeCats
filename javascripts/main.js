CatStore.catsXHR()

document.getElementById("cats-container").addEventListener("click", (e) => {
	if (e.target.id.indexOf("adopt") === 0) {
		let catIndex = e.target.id.split("-")[1]
		CatStore.launchAdoptModal(catIndex)
		
	}	 
})

document.getElementById("filters-container").addEventListener("click", (e) => {
	let btnIds = e.target.id.split("-");
	if (btnIds.indexOf("filter") === 0 && btnIds.indexOf("all") !== 1) {
		CatStore.getCatsByOwner(btnIds[1]); 
	} else {
		let cats = CatStore.getCats(); 
		let owners = CatStore.getOwners();
		CatStore.setFilteredCats([]);
		CatStore.createCombinedArr(cats, owners)
	}
})

document.getElementById("save-modal").addEventListener("click", (e) => {
	let catIndex = document.getElementById("currentCatIndex").innerHTML	
	let ownerSelectionId = CatStore.getOwnerIdByName(document.getElementById("owner-container").value)
	CatStore.adoptCat(catIndex, ownerSelectionId);
	
})