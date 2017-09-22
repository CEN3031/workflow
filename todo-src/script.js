// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [
    { task: "Learn Angular", 
      value: false 
    },
    {
      task: "Learn node",
      value: false
    }];

  $scope.newItem = "";

=======
  $scope.totalNumber = 2;

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push({task: $scope.newItem, value: false});
      $scope.newItem = "";
      $scope.totalNumber ++;
      document.getElementById('numberOfItems').innerHTML = $scope.totalNumber;
    }
  }

  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.totalNumber --;
    document.getElementById('numberOfItems').innerHTML = $scope.totalNumber;
  }
    
  $scope.deleteAllCompletedItems = function(){
    for (var i = 0; i < $scope.todos.length; i++)
    {
      console.log($scope.todos[i].value);

      if ($scope.todos[i].value == true)
      {
        $scope.todos.splice(i, 1);
      }

    }
    
  }
  

//creates a dynamically updating number of tasks
  window.onload = function() {
    document.getElementById('numberOfItems').innerHTML = $scope.totalNumber;
  };

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
