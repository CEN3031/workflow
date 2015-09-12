/* global angular */
/* global task */
/* global priority */



// Constructor is separate from its methods
var Todo = function(task, priority) {
    this.task = task;
    this.priority = priority;
}

// Getters
Todo.prototype.getTask = function() {
    return task;
};
Todo.prototype.getPriority = function() {
    return priority;
};

// Setters
Todo.prototype.setTask = function(task) {
    this.task = task;
};

Todo.prototype.setPriority = function(priority) {
    this.priority = priority;
};

// App code starts here!
var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [new Todo("Learn Angular","HIGH"), new Todo("Learn node","HIGH")];
  $scope.task = "";
  $scope.priority = "";
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.task !== "" && $scope.priority !== ""){
      var newItem = new Todo($scope.task,$scope.priority);
      $scope.todos.push(newItem);
      $scope.task = "";
      $scope.priority = "";
      
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
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