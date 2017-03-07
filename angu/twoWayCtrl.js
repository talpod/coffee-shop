app.controller('twoWayCtrl', function($scope) {
  $scope.bound = "Voracious"
  $scope.showTwoWay = function(){
    console.log($scope.bound);
  }
});
