// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){

  $scope.priority_enum = ["critical", "high", "moderate", "low"]

  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.priorities = ["moderate", "moderate"];
  $scope.newItem = "";

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.priorities.push("moderate");
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.priorities.splice(index, 1); 
 }

  $scope.setPriority = function(item, priority) {
    console.log("in priority");
    var index = $scope.todos.indexOf(item);
    $scope.priorities[index] = priority;
  }

  $scope.getPriority = function(item) {
    var index = $scope.todos.indexOf(item);
    return $scope.priorities[index];
  }

  $scope.getPriotityClass = function(item) {
    var p_index = $scope.priority_enum.indexOf(item);
    var classes = ["label label-danger", "label label-warning", "label label-info", "label label-success"];
    return classes[p_index];
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
