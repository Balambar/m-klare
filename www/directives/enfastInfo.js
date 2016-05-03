// loads in ui bootstrap accordion
app.directive('enfastInfo', [function () {

  return {
    templateUrl: '/directives/enfastInfo.html',
    controller: ['$scope', function($scope) {
      // this data should come from our backend
      // using $resource!
      $scope.info = [
        {
          title: 'Can I haz banana?',
          content: 'No'
        },
        {
          title: 'Can I haz pineapple?',
          content: 'Maybe'
        },
        {
          title: 'Can I haz angular?',
          content: 'Absolutely!'
        },
        {
          title: 'Can I haz Bootstrap.js?',
          content: 'NEVER!'
        }
      ];

    }]
  };
}]);