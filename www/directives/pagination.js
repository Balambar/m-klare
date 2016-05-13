app.directive("paginationList", [function(){
	return {
		templateUrl : '/directives/pagination.html',
		controller : ['$scope', 'Home', function($scope, Home){
			Home.get(),
			function(data){
				var numberArray = [];
				var fullNumber = Math.ceil(data.length/6);
				console.log(fullNumber);
				// console.log(Math.ceil(data.length/6));

				// var i = 0;
				// while (i++ < fullNumber) {
				// 	numberArray.push(i);
				// }

				for(var i = 0; i <= fullNumber; i++){
					numberArray.push(i);
					console.log(numberArray);
				}

				// $scope.pageNumbers = 
			}
		}]
	}
}]);
