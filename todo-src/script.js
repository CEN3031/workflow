//Angular code

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope) {
	$scope.todos = ["Change background", "Priority", "Edit button", "Mark Complete", "Show number of the items", "Clear complete items", "Add enter"];
	$scope.newItem = "";

	$scope.addItem = function(){
		console.log("in add");
		if ($scope.newItem !== ""){
		  $scope.todos.push($scope.newItem);
		  $scope.newItem = "";
		}
	}

	$scope.deleteItem = function(item){
		console.log("in delete");
		var index = $scope.todos.indexOf(item);
		$scope.todos.splice(index, 1);
	}

	$scope.editItem = function (item) {
		var check = prompt("Fix yo shit");
		if (check != null) {
			$scope.todos[item] = check;
		} 
	} 
	
});
