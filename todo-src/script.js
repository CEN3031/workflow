//Angular code

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope) {
    //This array holds the different priorities necessary for prioritization
    const priority = ["High", "Medium", "Low"];
	$scope.todos = [new Task("Change background", 2), new Task("Priority", 2), new Task("Edit button", 2), new Task("Mark Complete", 1), new Task("Show number of the items", 0), new Task("Clear complete items", 2), new Task("Add enter", 1)];
	$scope.newItem = "";
	$scope.itemCount = $scope.todos.length;
    //The index of the constant priority array to use
	$scope.prisel = "";

    //Adds a new task to the list
	$scope.addTask = function(){
		console.log("in add");
		if ($scope.newItem !== "" || $scope.prisel !== "") {
		    $scope.todos.push(new Task($scope.newItem, parseInt($scope.prisel)));
		    $scope.newItem = "";
		    $scope.itemCount += 1;
		}
		else
		    alert("Pick a name and a priority!");
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
	function Task(name, prinum) {
	    this.name = name;
	    this.complete = false;
	    this.priority = priority[prinum];
	}

    //Toggles the completed status of the task
	Task.prototype.toggle = function () {
	    this.complete = !this.complete;
	}
});
