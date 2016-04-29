app.controller("contact", ["$scope", "Contact", function($scope, Contact){

	$('#sendContact').click(function(){

		if ($scope.contactName == undefined || $scope.contactEmail == undefined || $scope.contactMessage == undefined) {
			alert("Du måste fylla i alla obligatoriska rutor!");
		}
		else
			Contact.create({
				name: $scope.contactName,
				email: $scope.contactEmail,
				phone: $scope.contactPhone,
				message: $scope.contactMessage
			}, function(){
				alert("Tack för din meddelande!");
				$scope.contactName = undefined;
				$scope.contactEmail = undefined;
				$scope.contactPhone = undefined;
				$scope.contactMessage = undefined;
			});
	});

	Contact.get(function(allContacts){
		console.log(allContacts);
	});

}]);