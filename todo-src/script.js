// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];   //list of items to do
  $scope.completed = [];   //list of completed items
  $scope.newItem = "";
  $scope.priorityList = ["", ""];
  $scope.priority = "";
  $scope.total = 2;
  $scope.completedItem = "";
  
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
  
  //should make deletion of list entry reusable code
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.priorityList.splice(index, 1);
    $scope.total --;
  }

  $scope.deleteCompletedItem = function(item){
    console.log("in deleteCompletedItem ");
    var index = $scope.completed.indexOf(item);
    $scope.completed.splice(index, 1);
  }

  $scope.markComplete = function(item){
    console.log("in markComplete");
    
    //grab the index of the item
    var index = $scope.todos.indexOf(item);

    //take the item and push an entry into the 'completed' list
    $scope.completed.push($scope.todos[index]);

    //remove the item from the todos list
    $scope.todos.splice(index, 1);
    $scope.priorityList.splice(index, 1);
    $scope.total --;
  }

  //adds item when "enter" is pressed
  $scope.keyPress = function($event) {
    var key = $event.keyCode || $event.which;
    if (key == 13) {
      $scope.addItem();
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