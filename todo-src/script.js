// Code goes here

var myApp = angular.module('app', []);
myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [
    {
      task: "Learn Angular",
      pri: "high",
      completed: false
    }, 
    {
      task: "Learn node",
      pri: "medium",
      completed: false
    }
  ];
  $scope.newItem = "";
  $scope.newPri = "";

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== "" && $scope.newPri !== ""){
      data = {
        task: $scope.newItem,
        pri: $scope.newPri,
        completed: false
      }
      $scope.todos.push(data);
      $scope.newItem = "";
      $scope.newPri = "";
    }
  };
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  };

  $scope.markAsCompleted = function(item){
      if(item.completed === true){
          item.completed = false;
        }
        else{
            item.completed = true;

        }

  };
  $scope.clearCompleted = function(){
      for(var i = 0; i < $scope.todos.length; i++){
          if($scope.todos[i].completed === true){
            $scope.todos.splice(i, 1);
            i = -1;

          }

      }

  };



});
