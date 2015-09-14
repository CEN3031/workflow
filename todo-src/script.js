//Angular code

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope) {
	$scope.todos = [new Task("Change background"), new Task("Priority"), new Task("Edit button"), new Task("Mark Complete"), new Task("Show number of the items"), new Task("Clear complete items"), new Task("Add enter")];
	$scope.newItem = "";
	$scope.itemCount = $scope.todos.length;

    //Adds a new task to the list
	$scope.addTask = function(){
		console.log("in add");
		if ($scope.newItem !== ""){
		  $scope.todos.push(new Task($scope.newItem));
		  $scope.newItem = "";
		  $scope.itemCount += 1;
		}
	}

    //Deletes the items in the task list
	$scope.deleteItem = function(item){
	    console.log("in delete");
		$scope.todos.splice(item, 1);
		$scope.itemCount -= 1;
	}

    //Allows for editing of the task's name
	$scope.editItem = function (item) {
		var check = prompt("Fix yo shit");
		if (check != null) {
			$scope.todos[item].name = check;
		} 
	} 
	
    //The constructor/definition of task
	function Task(name) {
	    this.name = name;
	    this.complete = false;
	}

    //Toggles the completed status of the task
	Task.prototype.toggle = function () {
	    this.complete = !this.complete;
	}
});
