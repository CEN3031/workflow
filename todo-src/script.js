// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [
    {name: "Learn Angular", done: false, editting: false, priority: 3},
    {name: "Learn node", done: false, editting: false, priority: 2},
    //added this "test" to test
    {name: "Test", done: false, editting: false, priority: 1}
  ];

  $scope.newItem = "";
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
  /* tried this to set priority level automatically to 3:
  *   $scope.newItem.priority = 3;
  * but i failed :(
  */
    }
  }
  
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }

  $scope.done = function(item){
    console.log("completed");
    if(!item.editting) item.done = !item.done;
  }
    
  $scope.editItem = function(item) {
    if(!item.done) item.editting = !item.editting;
  }
  
// changePriority function. simply adds 1 to the priority
// unless it is at max priority level, then it goes back to 1
  $scope.changePriority = function(item) {
    if(item.priority < 3) item.priority = item.priority + 1;
    else item.priority = 1;
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
