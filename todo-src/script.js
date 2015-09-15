// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";

  //Creating the variable for editing items.
  //$scope.editing is necessary to have angular know it needs to update the input.
  $scope.editing = {};
  $scope.editing.editedItem = "";

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
  
  //This function will edit an item.
  $scope.editItem = function(item){
    console.log("in edit");
    var index = $scope.todos.indexOf(item);

    //Creates arrays of all the items in the list, and the
    //inputs for future reference.
    $scope.currentInput = document.getElementsByClassName("visible");
    $scope.finalInput = document.getElementsByClassName("input-group");
    
  $scope.enterKey = function($event){
    console.log($event.keyCode);
    if (event.keyCode == 13){
      $scope.addItem();
    }
    //If there isn't currently anything being edited,
    //make the item invisible and the input visible.
    else if ($scope.editing.editedItem == ""){
      $scope.editing.editedItem = $scope.todos[index];
      $scope.currentInput[index].style['display'] = 'none';
      $scope.finalInput[index+1].style['display'] = 'inline-flex';
    } 
    //Else, apply the edit, make the item visible, and the input invisible.
    else {
      $scope.todos[index] = $scope.editing.editedItem;
      $scope.editing.editedItem = "";
      $scope.finalInput[index+1].style['display'] = 'none';
      $scope.currentInput[index].style['display'] = 'inline-flex';
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