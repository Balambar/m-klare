app.controller("contact", ["$scope", 'Alertify', "Contact", function($scope,Alertify ,Contact){

	$scope.sendContact = function(){
		if ($scope.contactName == undefined || $scope.contactEmail == undefined || $scope.contactMessage == undefined) {
			  Alertify.success("Du måste fylla i alla obligatoriska rutor!");
			
		}
		else
			Contact.create({
				name: $scope.contactName,
				email: $scope.contactEmail,
				phone: $scope.contactPhone,
				message: $scope.contactMessage,
				type: "Regular Contact"
			}, function(){
				Alertify.success("Tack för din meddelande!");
				$scope.contactName = undefined;
				$scope.contactEmail = undefined;
				$scope.contactPhone = undefined;
				$scope.contactMessage = undefined;
			});
	};

}]);