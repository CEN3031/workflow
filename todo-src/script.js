// Code goes here

var myApp = angular.module('app', []);
myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [{task: "Learn Angular", pri: "High"}, {task: "Learn node", pri: "Medium"}];
  $scope.newItem = {
        task: "",
        pri: "",
    };
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem.name !== "" && $scope.newItem.pri !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  };
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  };
});