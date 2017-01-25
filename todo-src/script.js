// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){

//    I modified the array to contain
//    flags for editing and checking off
//    this made implementing add/remove and
//    clearList much easier

  $scope.todos = [
    {text:"Learn Angular", done:false, edit:false},
    {text: "Learn node", done:false, edit:false}]
  $scope.newItem = "";

  $scope.update = function(index, value){
    $scope.todos[index].text = value;
    $scope.todos[index].edit = false;
  }

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push({text:$scope.newItem, done:false, edit:false});
      $scope.newItem = "";
    }
  }

  $scope.deleteItem = function(index){
    console.log("in delete");
    $scope.todos.splice(index, 1);
  }

  $scope.remove = function() {
    var oldList = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldList, function(x) {
      if (!x.done) $scope.todos.push(x);
    });
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
