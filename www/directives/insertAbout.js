app.directive('insertSeller', [function(){

  return {
    templateUrl: '/directives/insertAbout.html',
    controller: ['$scope','About' ,'$interval', function($scope, About, $interval) {
      
      About.get(function(x){
        if(x.length)return;
        About.create([
        {
          "title": "",
          "titles": "",
          "content" : ,
          "contents" : "",
          "img" : "",
          "imgs" : ""
        }
      ]);
    });

    }]
  };
}]);