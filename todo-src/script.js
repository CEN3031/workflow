// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";

  $scope.addItem = function(){

    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }

  $scope.addItemHigh = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push("NOW: " + $scope.newItem);
      $scope.newItem = "";
    }
  }

  $scope.addItemMedium = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push("TOMORROW: " + $scope.newItem);
      $scope.newItem = "";
    }
  }

  $scope.addItemLow = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push("SOMEDAY: " + $scope.newItem);
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }

  $scope.get_len = function() {
    return $scope.todos.length;
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