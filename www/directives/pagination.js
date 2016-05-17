app.directive("paginationList", [function(){
	return {
		templateUrl : '/directives/pagination.html',
		controller : ['$scope', 'Home','$route', '$routeParams', '$location', function($scope, Home, $route, $routeParams, $location){
			

$scope.badge = function(){
	Home.get(function(data){
		$scope.allBadge = data.length;
		
	});
	Home.get({
		type: 'Villor'
	},function(data){
		$scope.villorBadge = data.length;
	});
	Home.get({
		type: 'Lägenhet'
	},function(data){
		$scope.lagenhetBadge = data.length;
	});
}
	

// $scope.all = function() {
// 	Home.get(function(data){
				
// 				// console.log(data);
// 				var numberArray = [];
// 				var fullNumber = Math.ceil(data.length/6);
// 				// console.log(fullNumber);
// 				for(var i = 1; i <= fullNumber; i++){
// 					numberArray.push(i);
// 					// console.log(numberArray);
// 				}
// 				// console.log(fullNumber);
// 				$scope.first = 0;
// 				$scope.last = fullNumber;
				
// 				$scope.pageNumbers = numberArray;
// 				// [1,2,3,4,5];
// 			})
// };
// $scope.villor = function() {
// 	Home.get({
// 				type: 'Villor'
// 			},function(data){
				
// 				// console.log(data);
// 				var numberArray = [];
// 				var fullNumber = Math.ceil(data.length/6);
// 				// console.log(fullNumber);
// 				for(var i = 1; i <= fullNumber; i++){
// 					numberArray.push(i);
// 					// console.log(numberArray);
// 				}
// 				// console.log(fullNumber);

// 				$scope.pageNumbers = numberArray;
// 				// [1,2,3,4,5];
// 			})
// };
// $scope.lagenheter = function() {
// 	Home.get({
// 				type: 'Lägenhet'
// 			},function(data){
				
// 				// console.log(data);
// 				var numberArray = [];
// 				var fullNumber = Math.ceil(data.length/6);
// 				// console.log(fullNumber);
// 				for(var i = 1; i <= fullNumber; i++){
// 					numberArray.push(i);
// 					// console.log(numberArray);
// 				}
// 				// console.log(fullNumber);
// 				$scope.pageNumbers = numberArray;
// 				// [1,2,3,4,5];
// 			})

// };


$scope.totalItems = 64;
$scope.currentPage = 4;

$scope.setPage = function (pageNo) {
$scope.currentPage = pageNo;
};

$scope.maxSize = 5;
$scope.bigTotalItems = 100;
$scope.bigCurrentPage = 1;



$scope.badge();
if($location.$$path === '/fastigheter'){
	$scope.all();
}
if($location.$$path === '/villor'){
	$scope.villor();
}
if($location.$$path === '/lagenheter'){
	$scope.lagenheter();
}
	
console.log($scope);
			
			// // Hugos while loop
			// 	// var i = 0;
			// 	// while (i++ < fullNumber) {
			// 	// 	numberArray.push(i);
			// 	// }


			
		}]
	}
}]);
