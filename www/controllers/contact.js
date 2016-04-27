/*app.controller("contact", ["$scope", "$resource", "Contact", function($scope, $resource, Contact) {
  
	Contact.create({
	name: $scope.$watch("#contactName"),
	email: $scope.$watch("#contactEmail"),
	telefon: $scope.$watch("#contactTelefon"),
	messege: $scope.$watch("#contactMessage")
	});

	$scope.alla = "HOLA";
	console.log("JEJEJE");

}]);*/

app.controller("contact", ["$scope", "Contact", function($scope, Contact){

	Contact.get(function(allContacts){

		$scope.contacts = allContacts;
		console.log(allContacts);

	});

}]);