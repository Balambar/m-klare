app.directive('myMap', [function () {

  return {
    templateUrl: '/directives/myMap.html',
    controller: ['$scope', function($scope) {

    	var coordinates = [
    		{
    			lat: 55.5899,
    			lon: 12.9212
    		},
    		{
    			lat: 55.6109,
    			lon: 12.9946
    		},
    		{
    			lat: 55.6048,
    			lon: 12.9874
    		},
    		{
    			lat: 59.3473,
    			lon: 18.0238
    		},
    		{
    			lat: 58.0367,
    			lon: 14.3127
    		}
    	];

    	function getRandomItem(arr){
            return arr[Math.floor(Math.random()*arr.length)];
      	}

      	var myCords = getRandomItem(coordinates);

      	$scope.marker = {
    		position: [myCords.lat, myCords.lon]
  		};

    	$scope.map = {
    		center: [myCords.lat, myCords.lon],
    		options: function(){
    			return{
    				scrollwheel: false,
    				zoom: 18,
    				draggable: true
    			}
    		}
  		};
  		
  		
     setTimeout(function(){
     	window.dispatchEvent(new Event('resize'));
     },0);
      
    }]

  };
}]);