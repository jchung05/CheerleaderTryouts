angular.module('myTasks')
    .controller('tlCtrl', function($scope,$sessionStorage) {
        $scope.tasks = [{currentTask:'Complete me!', complete:false}];
    
        $scope.count = 1;
        
        $sessionStorage.tasks = $scope.tasks;
        
        $scope.edited = null;
        
        $scope.filters = "";
        
        $scope.newTask = "I'm a task!";

        $scope.addTask = function() {
            var task = {
                currentTask: $scope.newTask.trim(),
                complete: false
            }
            if (!$scope.newTask) {
                return ;
            }
            $scope.tasks.push(task);
            $scope.newTask = "";
        };
        
        $scope.editTask = function(task) {
            //Not done yet but the call from index.html works
            //alert("Do you work?");
        };

        $scope.completeTask = function(task) {
            if (task.complete) {
                task.complete = false;
            }
            else {
                task.complete = true;
            }
            return task.complete;
        };
        
        //Selects the filter to see the tasks
        //Does not filter correctly
        $scope.changeFilter = function(fil) {
            $scope.filters = fil;
            switch ($scope.filters) {
                case 'complete':
                    //alert($scope.filters);
                    //return task.complete = true;
                case 'incomplete':
                    //alert($scope.filters);
                    //return task.complete = false;
                default:
                    //alert($scope.filters);
                    return $scope.currentTask;
            }
        };
        
        $scope.alertFilter = function(fil) {
            alert(fil);
        }
        
        $scope.completeAll = function() {
            angular.forEach($scope.tasks, function(task) {
                task.complete = true;
            });
        };
        
        $scope.deleteTask = function(task) {
            $scope.tasks.splice($scope.tasks.indexOf(task), 1);
        };
        
        $scope.removeTasks = function() {
            $scope.tasks = $scope.tasks.filter( function(task) {
                return !task.complete;
            });
        };
    });