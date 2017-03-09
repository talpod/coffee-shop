 app.controller('BeerController', function($scope){
  $scope.beers = [];

  $scope.addBeer = function() {
    console.log("button works");
    var x = document.forms["myForm"]["bname"].value;
    var y = document.forms["myForm"]["bimage"].value;
    if (x == "" || y == "") {
        alert("Please fill in the form. All the details on this form are mandatory!");
        return false;
    }
    else {
    var beer = {
      name: $scope.name,
      style: $scope.style,
      abv: $scope.abv,
      image: $scope.image
    }
    };
    $scope.beers.push(beer);
    console.log($scope.beers);
  }

  $scope.removeBeer = function(index) {
    console.log(index);
    $scope.beers.splice(index, 1);

  }

});
