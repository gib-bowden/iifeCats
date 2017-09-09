CatStore.catsXHR()

document.getElementById("cats-container").addEventListener("click", (e) => {
	if (e.target.id.indexOf("adopt") === 0) {
		let catIndex = e.target.id.split("-")[1]
		CatStore.adoptCat(catIndex); 
	}	 
})


document.getElementById("callan").addEventListener("click", (e) => {
	CatStore.getCatsByOwner(2); 
})

document.getElementById("zoe").addEventListener("click", (e) => {
	CatStore.getCatsByOwner(1); 
})


document.getElementById("lauren").addEventListener("click", (e) => {
	CatStore.getCatsByOwner(3); 
})

document.getElementById("adopt").addEventListener("click", (e) => {
	CatStore.getCatsByOwner(0); 
})


document.getElementById("all").addEventListener("click", (e) => {
	let cats = CatStore.getCats(); 
	let owners = CatStore.getOwners();
	CatStore.createCombinedArr(cats, owners)
})