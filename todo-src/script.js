// Code goes here

var myApp = angular.module('app', []);
myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [{task: "Learn Angular", pri: "high"}, {task: "Learn node", pri: "medium"}];
  $scope.newItem = "";
  $scope.newPri = "";

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== "" && $scope.newPri !== ""){
      data = {
        task: $scope.newItem,
        pri: $scope.newPri
      }
      $scope.todos.push(data);
      $scope.newItem = "";
      $scope.newPri = "";
    }
  };
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  };
});