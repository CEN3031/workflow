// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [
  {text:"Learn Angular", done:false},
  {text:"Learn node", done:false}
  ];
  $scope.newItem = "";
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push({text:$scope.newItem, done:false});
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }

  //Attempted to use Angular filter() command, but it was not working. ForEach loop idea from http://stackoverflow.com/questions/22690598/filter-function-in-angular-js-not-working
  $scope.clearCompleted = function () {
        var t = [];
	angular.forEach($scope.todos, function (i)
	{
    	if (!i.done)
     	   t.push({text: i.text, done: i.done});
	});
		$scope.todos = t;
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