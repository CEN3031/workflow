// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [{name: "Learn Angular", isChecked: false }, {name: "Learn node", isChecked: false }];
  $scope.newItem = "";

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push({name: $scope.newItem, isChecked: false });
      $scope.newItem = "";
    }
  }

  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }

  $scope.deleteCheckedItems = function(){
    for(var i = 0; i < $scope.todos.length; i++){
      if($scope.todos[i].isChecked){
        $scope.todos.splice(i,1);
        i--;
      }
    }

  }

  $scope.later = function(item){
    console.log("Task Set to be done later");
    alert("Task set to be done Later");
  }
  $scope.tom = function(item){
    console.log("Task set to be done Tomorrow");
    alert("Task set to be done Tomorrow");
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
