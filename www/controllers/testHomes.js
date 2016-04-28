app.controller("testHomes", ["$scope", "Home", "Owner", "Seller", function($scope, Home, Owner, Seller){

	Home.create({
		address: "My Beautiful Street 69",
	    area: "Dalaplan",
	    type: "Lägenhet",
	    size: 85,
	    rooms: 3,
	    toilets: 1,
	    garden: false,
	    balcony: true,
	    price: 1000000,
	    shown: false,
	    img: [{
	      name: "Photo1",
	      url: "imgs/homes/test1.jpg"
	    },
	    {
	      name: "Photo2",
	      url: "imgs/homes/test2.jpg"
	    }],
	    owner: Owner.get({_id:"57220610c4ea0288206063cf",_populate:"owner"}),
	    seller: Seller.get({_id:"572205d4c4ea0288206063ce",_populate:"seller"})
	});

	/*Home.get(function(allhomes){
		console.log(allhomes);
		$scope.homes = allhomes;
		var minOwner = allhomes[0].owner;
		Owner.getById(minOwner, function(x){
			console.log(x.name);
			$scope.myOwner = x.name;
		});
		var minSeller = allhomes[0].seller;
		Seller.getById(minSeller, function(y){
			console.log(y.name);
			$scope.mySeller = y.name;
		});
	});	*/

	//Seller.getById("572205d4c4ea0288206063ce",function(x){console.log(x)});

}]);