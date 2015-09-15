// Code goes here

var myApp = angular.module('app', ["xeditable"]);

myApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});


myApp.controller('MainCtrl', function ($scope){
 $scope.todos = ["Learn Angular", "Learn node"];
    $scope.newItem = "";
    $scope.totalItems = 2;
    

  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
      $scope.totalItems+=1;
    }
  }
  
  $scope.enterPress = function(keyEvent) {
	  
	  if(keyEvent.which === 13){
		  $scope.addItem();
		  
	  }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.totalItems-=1;
  }
    
  
});

/*************************
 * Homework:
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/
 