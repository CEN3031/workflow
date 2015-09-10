// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.completed = [false, false];
  $scope.newItem = "";
  var size = $scope.todos.length;

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
      $scope.completed[size] = false;
      ++size;
    }
  };
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.completed.splice(index,1);
    --size;
  };
    
  $scope.deleteCompletedItems = function() {
    console.log("in deletion of completed items");
    var numDeleted = 0;
    for(var i = size; i > -1; --i) {
      console.log(i);
      if($scope.completed[i] == true) {
        $scope.todos.splice(i, 1);
        $scope.completed.splice(i,1);
        ++numDeleted;
      }
    }
    size -= numDeleted;
  };

  $scope.completeItem = function(item) {
    console.log("in completion");
    var index = $scope.todos.indexOf(item);

    $scope.completed[index] = true;
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