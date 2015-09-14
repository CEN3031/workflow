//Angular code

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope) {
	$scope.todos = ["Change background", "Priority", "Edit button", "Mark Complete", "Show number of the items", "Clear complete items", "Add enter"];
	$scope.newItem = "";
	$scope.itemCount = $scope.todos.length;
	$scope.checks = [false, false, false, false, false, false, false];

	$scope.addItem = function(){
		console.log("in add");
		if ($scope.newItem !== ""){
		  $scope.todos.push($scope.newItem);
		  $scope.newItem = "";
		  $scope.itemCount += 1;
		  $scope.checks.push(false);
		}
	}

	$scope.deleteItem = function(item){
		console.log("in delete");
		var index = $scope.todos.indexOf(item);
		$scope.todos.splice(index, 1);
		$scope.checks.splice(index, 1);
		$scope.itemCount -= 1;
	}

	$scope.editItem = function (item) {
		var check = prompt("Fix yo shit");
		if (check != null) {
			$scope.todos[item] = check;
		} 
	} 

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
	
});
