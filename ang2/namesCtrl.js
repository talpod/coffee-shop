app.controller('namesCtrl', function($scope, namesService) {
  $scope.names = namesService.names;
});
