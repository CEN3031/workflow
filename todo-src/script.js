// Code goes here

var myApp = angular.module('app', ["xeditable"]);

myApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});


myApp.controller('MainCtrl', function ($scope){

 $scope.todos = 
 [ 
  {
    task      : "Learn Angular",
    priority  : "HIGH",
    complete  : false
  },
  
  {
    task      : "Learn node",
    priority  : "HIGH",
    complete  : false
  }];
  
    $scope.newItem = "";
    $scope.priority = "";
    $scope.totalItems = 2;
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push(
        {
          task  : $scope.newItem,
          priority  : $scope.priority,
          complete: false
        });
      $scope.newItem = "";
      $scope.priority = "";
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
    
  $scope.markComp = function(item){
    console.log("in complete");
    item.complete = !(item.complete);
  }

  $scope.getIcon = function(item){
    if(item.complete){
      return "glyphicon glyphicon-check";
    } else return "glyphicon glyphicon-unchecked";
  }

  $scope.removeCompleteItems = function()
  {    
    for (var i = $scope.todos.length-1; i >= 0; i--)
    {
        if($scope.todos[i].complete === true)
        {
            $scope.deleteItem($scope.todos[i]);
        }
    }
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
 
