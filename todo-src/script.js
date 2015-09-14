// Code goes here

var myApp = angular.module('app', []);

<<<<<<< HEAD
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
=======
myApp.controller('MainCtrl', function($scope) {
	$scope.todos = ["HIGH PRIORITY: Change background", "HIGH PRIORITY: Priority", "Medium Priority: Edit button", "Medium Priority: Mark Complete", "HIGH PRIORITY: Show number of the items", "HIGH PRIORITY: Clear complete items", "Low Priority: Add enter"];
	$scope.newItem = "";
	$scope.itemCount = $scope.todos.length;
	$scope.checks = [false, false, false, false, false, false, false];
>>>>>>> master

    //Deletes the items in the task list
	$scope.deleteItem = function(item){
<<<<<<< HEAD
	    console.log("in delete");
		$scope.todos.splice(item, 1);
=======
		console.log("in delete");
		var index = $scope.todos.indexOf(item);
		$scope.todos.splice(index, 1);
		$scope.checks.splice(index, 1);
>>>>>>> master
		$scope.itemCount -= 1;
	}

    //Allows for editing of the task's name
	$scope.editItem = function (item) {
		var check = prompt("Edit");
		if (check != null) {
			$scope.todos[item].name = check;
		} 
	} 
<<<<<<< HEAD
	
    //The constructor/definition of task
	function Task(name, prinum) {
	    this.name = name;
	    this.complete = false;
	    this.priority = priority[prinum];
	}

    //Toggles the completed status of the task
	Task.prototype.toggle = function () {
	    this.complete = !this.complete;
=======

	$scope.checkItem = function(item) {
		if($scope.checks[item] == true)
		{
			$scope.checks[item] = false;
		}
		else {
			$scope.checks[item] = true;
		}
	}

	$scope.deleteChecked = function() {
		for(i = 0; i < $scope.todos.length; i++)
		{
			if($scope.checks[i] == true){
				$scope.todos.splice(i, 1);
				$scope.checks.splice(i, 1);
				$scope.itemCount -= 1;
				i -= 1;
			}
		}
	}

	$scope.addHigh = function () {
	    console.log("in add");
	    if ($scope.newItem !== "") {
	        $scope.todos.push("HIGH PRIORITY: " + $scope.newItem);
	        $scope.newItem = "";
	        $scope.itemCount += 1;
	        $scope.checks.push(false);
	    }
	}

	$scope.addMedium = function () {
	    console.log("in add");
	    if ($scope.newItem !== "") {
	        $scope.todos.push("Medium Priority: " + $scope.newItem);
	        $scope.newItem = "";
	        $scope.itemCount += 1;
	        $scope.checks.push(false);
	    }
	}

	$scope.addLow = function () {
	    console.log("in add");
	    if ($scope.newItem !== "") {
	        $scope.todos.push("Low Priority: " + $scope.newItem);
	        $scope.newItem = "";
	        $scope.itemCount += 1;
	        $scope.checks.push(false);
	    }
>>>>>>> master
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
