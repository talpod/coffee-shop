app.controller('randCtrl', function($scope) {
  $scope.getRand = function(){
    $scope.rand = Math.floor(Math.random()*100);
  };
});
