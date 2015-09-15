// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){

  $scope.todos = [{text:'Learn Angular', "priority":"now", done:false}, {text: 'Learn node', "priority":"now", done:false}];
  $scope.newItem = {
    "priority": "",
    "text": "",
    done:false
  };
  
  $scope.addItem = function(){
    console.log("in add");
    var itemCopy = {};
    if ($scope.newItem !== ""){
      $scope.todos.push({text: $scope.newItem, done: false});
      itemCopy.priority = $scope.newItem.priority;    
      itemCopy.text = $scope.newItem.text;
      $scope.todos.push(itemCopy, don);
      $scope.newItem.text = "";
      $scope.newItem.priority = "";
      $scope.newItem = "";
    }
    else {
      alert("Please enter a task/priority level!")
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }
    
  $scope.showEdits = function(item){
    var index = $scope.todos.indexOf(item);
    $scope.edits = true;
    $scope.editItem = function(keyEvent){
      if(keyEvent.which === 13){
        if($scope.editBox !== ""){
          $scope.todos[index].text = $scope.editBox;
        }
        $scope.edits = false;
      }
    }
  }

	/* Clear all feature */

	$scope.clearItems = function (){
		console.log("Deleted everything");
		$scope.todos.length = 0;
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
 * *********************//**
 * Created by Michelle on 9/14/2015.
 */
