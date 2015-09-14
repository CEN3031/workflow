// CEN3031 Group 7C

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";

  $scope.todosEditor = [false, false]; //Array that holds "false" if the
                                       //corresponding edit form should
                                       //be hidden, true otherwise.

  $scope.warningText = "";             //Text that displays any warnings
                                       //if the user performs an illegal
                                       //action.        
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      if($scope.todos.indexOf($scope.newItem) == -1){
        $scope.todos.push($scope.newItem);
        $scope.newItem = ""; //Clearing Input Box
        $scope.warningText = ""; //Get rid of error message.
      }
      else{
        $scope.newItem = ""; //Clearing Input Box
        $scope.warningText = "Error! No repeats allowed!";
      }
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }

  $scope.showEditor = function(item){   //Shows the appropriate edit
                                        //form.
    var index = $scope.todos.indexOf(item);
    $scope.todosEditor[index] = true;
  }

  $scope.cancelEdit = function(item){   //Cancels the editing action
    var index = $scope.todos.indexOf(item);
    $scope.todos[index] = item;
    $scope.todosEditor[index] = false;
  }

  $scope.editItem = function(item, editedItem){ //Performs the actual
                                                //edit. Lots of
                                                //debugging is implemented
                                                //so nothing should crash
                                                //the webpage.

    if(typeof editedItem == 'undefined'){ //Prevent users from adding blank entries!
      $scope.cancelEdit(item);
      return;
    }

    if(editedItem == ""){   //Prevent users from adding blank entries (that used
                            //to be not blank but were then subsequently erased)
      $scope.cancelEdit(item);
    } 
    else{ //The entry was not blank

      if($scope.todos.indexOf(editedItem) == -1 || item == editedItem){ //We have not a repeat
                                                                        //or we are renaming the item
                                                                        //the same thing.
        var index = $scope.todos.indexOf(item);

        $scope.todos[index] = editedItem;
        $scope.todosEditor[index] = false;  //Close the editing window.

        $scope.warningText = "";            //Get rid of error message.
      }
      else{
        $scope.warningText = "Error! No repeats allowed!";
        return;
      }
      
    }
  }
  
  $scope.completeItems = [false, false];

  $scope.completeItem = function(item){
    var index = $scope.todos.indexOf(item);
    $scope.completeItems[index] = true;
  }
  
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality  <--- Done! Miles got it.
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/