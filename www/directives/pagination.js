app.directive("paginationList", [function(){
	return {
		templateUrl : '/directives/pagination.html',
		controller : ['$scope', 'Home', function($scope, Home){
			console.log("i am alive");
			Home.get(function(data){
				
				console.log(data);
				var numberArray = [];
				var fullNumber = Math.ceil(data.length/6);
				console.log(fullNumber);
				for(var i = 1; i <= fullNumber; i++){
					numberArray.push(i);
					console.log(numberArray);
				}
				console.log(fullNumber);
				$scope.pageNumbers = numberArray;
				// [1,2,3,4,5];
			})
			
			// Home.get(),
			// function(data){
				
			// debugger

			// // Hugos while loop
			// 	// var i = 0;
			// 	// while (i++ < fullNumber) {
			// 	// 	numberArray.push(i);
			// 	// }


			// }
		}]
	}
}]);
