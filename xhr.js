var CatStore = ((oldCatStore) => {


	oldCatStore.catLoadWorks = function() {
		let catsData = JSON.parse(this.responseText).cats;
		CatStore.setCats(catsData)
		CatStore.ownersXHR(); 
	}

	oldCatStore.ownerLoadWorks = function() {
		let ownersData = JSON.parse(this.responseText).owners;
		CatStore.setOwners(ownersData)
		let catArr = CatStore.getCats();
		let ownerArr = CatStore.getOwners();
		CatStore.createCombinedArr(catArr, ownerArr)
		//this.createCombinedArr(cats, owners)
	}

	oldCatStore.logFailedRequest = () => {
		console.log("request failed");
	}

	oldCatStore.catsXHR = () => {
		let catsRequest = new XMLHttpRequest();
		catsRequest.addEventListener("load", CatStore.catLoadWorks)
		catsRequest.addEventListener("error", CatStore.logFailedRequest)
		catsRequest.open("GET", "cats.json")
		catsRequest.send();
	}

	oldCatStore.ownersXHR = () => {
		let ownersRequest = new XMLHttpRequest();
		ownersRequest.addEventListener("load", CatStore.ownerLoadWorks)
		ownersRequest.addEventListener("error", CatStore.logFailedRequest)
		ownersRequest.open("GET", "owners.json")
		ownersRequest.send();

	}


	return oldCatStore

})(CatStore || {})
