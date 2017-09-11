var CatStore = ((oldCatStore) => {

	oldCatStore.createCombinedArr = (cats, owners) => {
		cats.forEach((cat) => {
			var ownerId = cat.ownerId;
			owners.forEach ((owner) => {
				if (ownerId === owner.id) {
			        cat["owner"] = owner.name
			    }
			})
		})
	CatStore.domString(cats);
	}

	oldCatStore.domString = (inputArray) => {
		let catz = "";
		let ownerBtn;
		inputArray.forEach((cat, i) => {
			if (cat.owner !== "None") {
				ownerBtn = `<button class="btn btn-default owner">${cat.owner}</button>`
			} else {
				ownerBtn = `<button class="btn btn-danger owner" id="adopt-${i}" 

				>Adopt Me!</button>`
			}
			let newCat = `
 				<div class="col-xs-3">
            		<div class="catBox col-xs-12 text-center noPad"  id="catBox-${i}">
            			<div class="catName">${cat.name}</div>
            			<img class="catImage" src="${cat.imageUrl}">
            			${ownerBtn}
            			<div class="catSkill text-center">${inputArray[i].specialSkill}</div>
            		</div>
            	</div>`
			catz += newCat;
		})
		CatStore.writeToDom(catz)
	}


	oldCatStore.writeToDom = (str) => {		
		document.getElementById("cats-container").innerHTML = str; 
	}

	oldCatStore.launchAdoptModal = (index) => {
		document.getElementById("currentCatIndex").innerHTML = index;
		$('#adoptModal').modal();
	}
	return oldCatStore

})(CatStore || {})