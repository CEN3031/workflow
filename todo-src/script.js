// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.todid = [""];
  $scope.newItem = "";
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }
  
  //want to take item and move it to stuff I did
  $scope.completeItem = function(item){
    console.log("in complete");
    var index = $scope.todos.indexOf(item);
    $scope.todid.push($scope.todos[index]);
    $scope.todos.splice(index, 1);
    index++;
  }
});