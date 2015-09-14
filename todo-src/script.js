// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope) {
    //This array holds the different priorities necessary for prioritization
    const priorityarr = ["High", "Medium", "Low"];
	$scope.todos = [new Task("Change background", 2), new Task("Priority", 2), new Task("Edit button", 2), new Task("Mark Complete", 1), new Task("Show number of the items", 0), new Task("Clear complete items", 2), new Task("Add enter", 1)];
	$scope.newItem = "";
    //The index of the constant priority array to use
	$scope.prisel = "";

    //Adds a new task to the list
	$scope.addTask = function(){
		console.log("in add");
		if ($scope.newItem !== "" || $scope.prisel !== "") {
		    $scope.todos.push(new Task($scope.newItem, parseInt($scope.prisel)));
		    $scope.newItem = "";
		}
		else
		    alert("Pick a name and a priority!");
	}

    //Deletes the items in the task list
	$scope.deleteItem = function(item){
	    console.log("in delete");
		$scope.todos.splice(item, 1);
	}

    //Allows for editing of the task's name
	$scope.editItem = function (item) {
		var check = prompt("Edit");
		if (check != null) {
			$scope.todos[item].name = check;
		} 
	}
	
    //The constructor/definition of task
	function Task(name, prinum) {
	    this.name = name;
	    this.complete = false;
	    this.priority = priorityarr[prinum];
	}

    //Toggles the completed status of the task
	Task.prototype.toggle = function () {
	    this.complete = !this.complete;
	}

    //Calls to check or uncheck an item
	$scope.checkItem = function(item) {
	    $scope.todos[item].toggle();
	}

    //Delete all checked items
	$scope.deleteChecked = function() {
	    for(i = 0; i < $scope.todos.length; i++)
	    {
	        if($scope.todos[i].complete == true){
	            $scope.todos.splice(i, 1);
	            i -= 1;
	        }
	    }
	}
    //Add a task that is of high priority
	$scope.addHigh = function () {
	    console.log("in add");
	    $scope.prisel = 0;
	    $scope.addTask();
	}

    //Add a task that is of medium priority
	$scope.addMedium = function () {
	    console.log("in add");
	    $scope.prisel = 1;
	    $scope.addTask();
	}

    //Add a task that is of low priority
	$scope.addLow = function () {
	    console.log("in add");
	    $scope.prisel = 2;
	    $scope.addTask();
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
