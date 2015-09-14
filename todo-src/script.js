// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope) {
  $scope.todos = ["Learn Angular", "Learn node"]; //The default starting list
  $scope.priorityList = [0,2]; //The default priority
  $scope.completedList = [false, false];//default completion
  $scope.newItem = ""; //An item to be added to the list
  var totalItems = 2; //Starting number of items in the list
  $scope.header = " " + totalItems; //Header text that will be updated dynamically
  $scope.priorityOptions = ["None","Now!","Today","Later"]; //Options for different priorities

  //Function to add an item to the todo list and update the header
  $scope.addItem = function() {
    console.log("in add");
    if ($scope.newItem !== "") {
      $scope.todos.push($scope.newItem);
      $scope.priorityList.push(0); // Adds default priority of None
      $scope.completedList.push(false);//adds a default priority
      $scope.newItem = "";
      totalItems = totalItems + 1;
      $scope.updateString();
    }
  };

  //Function to remove an item from the todo list and update the header
  $scope.deleteItem = function(item) {
    if (!$scope.isComplete(item)){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.priorityList.splice(index, 1); //Splices priority of listItem
    $scope.completedList.splice(index, 1);//splices from completed list
    totalItems = totalItems - 1;
    $scope.updateString();
    }
    else{
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.priorityList.splice(index, 1); //Splices priority of listItem
    $scope.completedList.splice(index, 1);//splices from completed list
    }
  }; 

  $scope.completeItem = function(item) {//adds a check next to item and adds it to the completed array
    if(!$scope.isComplete(item)){
      totalItems = totalItems - 1;
      $scope.updateString();
      var index = $scope.todos.indexOf(item);
      $scope.completedList[index] = true;
    }
    else {
      totalItems = totalItems + 1;
      $scope.updateString();
      var index = $scope.todos.indexOf(item);
      $scope.completedList[index] = false;
    }
  };

  $scope.isComplete = function(item) {//checks if an item is complete
    var index = $scope.todos.indexOf(item)
    return $scope.completedList[index];
  };

  //Function called to update the {{header}} in the html file
  $scope.updateString = function() {
    $scope.header = " " + totalItems;
  };

  //Function called to change priority
  $scope.updatePriority = function(listItem, priority) {
    $scope.priorityList[listItem] = priority;
  };

  //Function called to change color of priority buttons
  $scope.changeClass = function(listItem) {
    switch($scope.priorityList[listItem]) {
      case 0:    //When None is chosen
      return "btn-default";
      break;
      case 1:    //When Now! is chosen
      return "btn-danger";
      break;
      case 2:    //When Today is chosen
      return "btn-warning";
      break;
      case 3:    //When Later is chosen
      return "btn-info";
      break;
      default:
      return "btn-default";
    }
  };

});