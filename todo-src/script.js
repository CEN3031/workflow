// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope) {
	$scope.todos = ["HIGH PRIORITY: Change background", "HIGH PRIORITY: Priority", "Medium Priority: Edit button", "Medium Priority: Mark Complete", "HIGH PRIORITY: Show number of the items", "HIGH PRIORITY: Clear complete items", "Low Priority: Add enter"];
	$scope.newItem = "";
	$scope.itemCount = $scope.todos.length;

	// $scope.addItem = function(){
	//   console.log("in add");
	//   if ($scope.newItem !== ""){
	//     $scope.todos.push($scope.newItem);
	//     $scope.newItem = "";
	//   }
	// }

	$scope.addHigh = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push("HIGH PRIORITY: " + $scope.newItem);
      $scope.newItem = "";
			$scope.itemCount += 1;
    }
  }

  $scope.addMedium = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push("Medium Priority: " + $scope.newItem);
      $scope.newItem = "";
			$scope.itemCount += 1;
    }
  }

  $scope.addLow = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push("Low Priority: " + $scope.newItem);
      $scope.newItem = "";
			$scope.itemCount += 1;
    }
  }

	$scope.deleteItem = function(item){
		console.log("in delete");
		var index = $scope.todos.indexOf(item);
		$scope.todos.splice(index, 1);
		$scope.itemCount -= 1;
	}

	$scope.editItem = function (item) {
		var check = prompt("Edit");
		if (check != null) {
			$scope.todos[item] = check;
		}
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
