// Code goes here

var myApp = angular.module('app', []);




myApp.controller('MainCtrl', function($scope) {
    $scope.todos = ["Learn Angular", "Learn node"];
    $scope.newItem = "";
    $scope.currentEditIndex;
    $scope.submitText = "";

    $scope.addItem = function() {
        console.log("in add");
        console.log($scope.value);
        if ($scope.newItem !== "") {
            //console.log(opt);
            $scope.newItem = $scope.value + ": " + $scope.newItem;
            $scope.todos.push($scope.newItem);
            $scope.newItem = "";
        }
    }

    $scope.deleteItem = function(item) {
        console.log("in delete");
        var index = $scope.todos.indexOf(item);
        $scope.todos.splice(index, 1);
    }

    $scope.editItem = function(item) {
        console.log("Editing current index");
        $scope.currentEditIndex = $scope.todos.indexOf(item);
    }

    $scope.submitEdit = function(item, submitText) {
        var index = $scope.todos.indexOf(item);
        $scope.todos[index] = submitText;
        $scope.currentEditIndex = -1;
        $scope.submitText = "";
    }

    $scope.deleteAll = function() {
        console.log("Deleting all");
        $scope.todos.length = 0;
    }

    $scope.checkIndex = function(item) {
      return $scope.currentEditIndex == $scope.todos.indexOf(item);
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
