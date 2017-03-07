app.controller('addTodo', function($scope) {
    //$scope.bound = ""
    $scope.todo = [];
    $scope.todoInput;

    $scope.goTodo = function() {
        $scope.todo.push($scope.todoInput);
        console.log($scope.todo);
    }
});
