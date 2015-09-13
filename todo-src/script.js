// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope) {
  $scope.todos = ["Learn Angular", "Learn node"]; //The default starting list
  $scope.newItem = ""; //An item to be added to the list
  var totalItems = 2; //Starting number of items in the list
  $scope.header = "Total Number = " + totalItems; //Header text that will be updated dynamically

  //Function to add an item to the todo list and update the header
  $scope.addItem = function() {
    console.log("in add");
    if ($scope.newItem !== "") {
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
      totalItems = totalItems + 1;
      $scope.updateString();
    }
  };

  //Function to remove an item from the todo list and update the header
  $scope.deleteItem = function(item) {
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    totalItems = totalItems - 1;
    $scope.updateString();
  }; 

  //Function called to update the {{header}} in the html file
  $scope.updateString = function() {
    $scope.header = "Total Number = " + totalItems;
  };

});