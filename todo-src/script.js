// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.dones = [false, false];
  $scope.editor = { text : null, index : null };
  $scope.newItem = "";

  $scope.addItem = function(){

    console.log("in add");
    if ($scope.newItem !== ""){
      if($scope.todos.indexOf($scope.newItem) === -1){
        $scope.todos.push($scope.newItem);
      }
      $scope.newItem = "";
    }
  }

  $scope.addItemHigh = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push("NOW: " + $scope.newItem);
      $scope.newItem = "";
    }
  }

  $scope.addItemMedium = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push("TOMORROW: " + $scope.newItem);
      $scope.newItem = "";
    }
  }

  $scope.addItemLow = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push("SOMEDAY: " + $scope.newItem);
      $scope.newItem = "";
    }
  }

  $scope.editItem = function(item){
    console.log("in edit");
    var index = $scope.todos.indexOf(item);
    $scope.editor.index = index;
    $scope.editor.text = item;
  }

  $scope.saveItem = function(item){
    console.log("in save");
    $scope.todos[$scope.editor.index] = $scope.editor.text;
    $scope.editor.index = null;
  }

  $scope.cancelItem = function(item){
    console.log("in cancel");
    $scope.editor.index = null;
  }

  $scope.editingMode = function(item){
    var index = $scope.todos.indexOf(item);
    return $scope.editor.index === index;
  }

    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.dones.splice(index, 1);
  }

    
  $scope.toggleItem = function(item){
    console.log("in toggle");
    var index = $scope.todos.indexOf(item);
    $scope.dones[index] = !$scope.dones[index];
  }
  
  $scope.getActive = function(item){
    console.log("in toggle");
    var index = $scope.todos.indexOf(item);
    return !$scope.dones[index];
  }

  
  $scope.deleteAll = function(){
    var length = $scope.dones.length; //get all the todos in the list
    if(length !== 0){
      var a = confirm("Are you really sure you want to do this?");
      if(a){
        console.log("deleted All");
        for(i = 0; i < length; i++){
          if($scope.dones[i]){
            $scope.todos.splice(i,0); //delete all them from the list
            $scope.dones.splice(i,0);
          }
        }
      }
    }
  }

  $scope.get_len = function() {
    return $scope.todos.length;
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