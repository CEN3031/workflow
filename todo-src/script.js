// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.dones = [false, false];
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
    $scope.dones.splice(index, 1);
  }
    
  $scope.toggleItem = function(item){
    console.log("in toggle");
    var index = $scope.todos.indexOf(item);
    $scope.dones[index] = !$scope.dones[index];
  }
  
  $scope.getActive = function(item){
    console.log("in toggle");
    var index = $scope.todos.indexOf(item);
    return !$scope.dones[index];
  }
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/