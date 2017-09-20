// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [
                  {name: "Learn Angular", editing:false},
                  {name: "Learn node", editing: false}
                ];
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

// Edit function
$scope.editItem = function (item) {
       item.editing = true;
       item.oldName = item.name;
   }

   $scope.doneEditing = function (item) {
       item.editing = false;
       //dong some background ajax calling for persistence...
   };
   $scope.Cancel = function (item) {
       item.editing = false;
       item.name = item.oldName;
   };

  //End of Edit functions


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
