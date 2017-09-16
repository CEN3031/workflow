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
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }

  $scope.completeItem = function(item){
    console.log("in complete");
    item.strike();
  }

  $scope.markAsCompleted = function(item){
    if(item.completed === true){
        item.completed = false;
      }
      else{
          item.completed = true;

      }

  }
  $scope.clearCompleted = function(){
    for(var i = 0; i < $scope.todos.length; i++){
        if($scope.todos[i].completed === true){
          $scope.todos.splice(i, 1);
          i = -1;

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