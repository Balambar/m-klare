app.directive('myCarousel', [function(){

	return{
		templateUrl: '/directives/myCarousel.html',
		controller: ['$scope', 'Home', function($scope, Home){
			$scope.active = 0;
			var slides = $scope.slides = [];
			var currIndex = 0;

			console.log('$scope slides =', slides);

			Home.get(function(data){

				for (var i = 0; i < data.length; i++) {

					console.log(data[i], 'loaded from db');

					slides.push({
				      image: data[i].url,
				      text: data[i].name,
				      id: currIndex++
					});

				    console.log('adding', data[i], 'to slides');
				}

				console.log('$scope slides =', slides);
			});

			$scope.stylify = function(slide) {
				return {
					'background-image': 'url(' + slide.image + ')',
					height: "305px"
				};
			}
		}]
	};
}]);