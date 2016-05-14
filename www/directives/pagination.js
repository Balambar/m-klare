app.directive("paginationList", [function(){
	return {
		templateUrl : '/directives/pagination.html',
		controller : ['$scope', 'Home','$route', '$routeParams', '$location', function($scope, Home, $route, $routeParams, $location){
			
console.log($location.$$path);


$scope.all = function() {
	Home.get(function(data){
				
				// console.log(data);
				var numberArray = [];
				var fullNumber = Math.ceil(data.length/6);
				// console.log(fullNumber);
				for(var i = 1; i <= fullNumber; i++){
					numberArray.push(i);
					// console.log(numberArray);
				}
				// console.log(fullNumber);
				$scope.pageNumbers = numberArray;
				// [1,2,3,4,5];
			})
};
$scope.villor = function() {
	Home.get({
				type: 'Villor'
			},function(data){
				
				// console.log(data);
				var numberArray = [];
				var fullNumber = Math.ceil(data.length/6);
				// console.log(fullNumber);
				for(var i = 1; i <= fullNumber; i++){
					numberArray.push(i);
					// console.log(numberArray);
				}
				// console.log(fullNumber);
				$scope.pageNumbers = numberArray;
				// [1,2,3,4,5];
			})
};
$scope.lagenheter = function() {
	Home.get({
				type: 'Lägenhet'
			},function(data){
				
				// console.log(data);
				var numberArray = [];
				var fullNumber = Math.ceil(data.length/6);
				// console.log(fullNumber);
				for(var i = 1; i <= fullNumber; i++){
					numberArray.push(i);
					// console.log(numberArray);
				}
				// console.log(fullNumber);
				$scope.pageNumbers = numberArray;
				// [1,2,3,4,5];
			})

};

if($location.$$path === '/fastigheter'){
	$scope.all();
}
if($location.$$path === '/villor'){
	$scope.villor();
}
if($location.$$path === '/lagenheter'){
	$scope.lagenheter();
}
			
			// // Hugos while loop
			// 	// var i = 0;
			// 	// while (i++ < fullNumber) {
			// 	// 	numberArray.push(i);
			// 	// }


			
		}]
	}
}]);
