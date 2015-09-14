// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      if($scope.todos.indexOf($scope.newItem) === -1){
        $scope.todos.push($scope.newItem);
      }
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }
  
  $scope.deleteAll = function(){
    var length = $scope.todos.length; //get all the todos in the list
    if(length !== 0){
      var a = confirm("Are you really sure you want to do this?");
      if(a){
        console.log("deleted All");
        $scope.todos.splice(0, length); //delete all them from the list
      }
    }
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