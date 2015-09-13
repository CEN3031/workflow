// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";
  $scope.priorityList = ["", ""];
  $scope.priority = "";
  $scope.total = 2;
  
  $scope.keyPress = function($event) {
    var key = $event.keyCode || $event.which;
    if (key == 13) {
      $scope.addItem();
    }
  }

  $scope.setPriority = function(item){
    console.log("in priority");
    if ($scope.priority == "") {
      $scope.priority = item;
    }
    $scope.addItem();
  }

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      //places "now" task at top
      if ($scope.priority == "now") { 
        $scope.todos.unshift($scope.newItem);
        $scope.priorityList.unshift($scope.priority);
      }
      else {
        $scope.todos.push($scope.newItem);
        $scope.priorityList.push($scope.priority);
      }
      $scope.newItem = "";
      $scope.priority = "";
      $scope.total ++;
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.priorityList.splice(index, 1);
    $scope.total --;
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