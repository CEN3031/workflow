// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  
  $scope.todos =
  [
    { 
      task  : "Learn Angular",
      complete  : false
    },
    
    {
      task  : "Learn node",
      complete  : true
    },
    
    { 
      task  : "3",
      complete  : true
    },
    
    { 
      task  : "4",
      complete  : false
    },
    
    {
      task  : "5",
      complete  : true
    },
    
    {
      task  : "6",
      complete  : false
    }
  ]
  
  $scope.newItem = "";
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push(
        {
          task: $scope.newItem,
          complete: false
        });
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }
    
  
  $scope.removeCompleteItems = function()
  {    
    for (var i = $scope.todos.length-1; i >= 0; i--)
    {
        if($scope.todos[i].complete === true)
        {
            $scope.todos.splice(i, 1);
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