app.directive('myCarousel', [function(){

	return{
		templateUrl: '/directives/detailedObject/myCarousel.html',
		controller: ['$scope', '$routeParams', 'Home', function($scope, $routeParams, Home){
			$scope.active = 0;
			$scope.slides = [];
			var currIndex = 0;

			Home.getById({id:$routeParams.id}, function(data){
				console.log(data.img.length);
				for (var i = 0; i < data.img.length; i++) {
					
					$scope.slides.push({
						image: data.img[i].url,
						text: data.img[i].name,
						id: currIndex++
					});
				}
			});

			$scope.stylify = function(slide) {
				return {
					'background-image': 'url(' + slide.image + ')',
					height: "500px"
				};
			}
		}]
	};
}]);