angular.module('myTasks')
    .controller('tlCtrl', function($scope) {
        $scope.tasks = [{currentTask:'Complete me!', complete:false}];
    
        var tasks = $scope.tasks;
        
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
            //Not done yet
        };

        $scope.completeAll = function() {
            angular.forEach($scope.tasks, function(task) {
                task.complete = true;
            });
        };
        
        $scope.deleteTask = function(task) {
            $scope.tasks.splice($scope.tasks.indexOf(task), 1);
        };
        
        //Currently bugged to only remove half the tasks
        $scope.removeTasks = function() {
            angular.forEach($scope.tasks, function(task) {
            if (task.complete) {
                $scope.tasks.splice($scope.tasks.indexOf(task),1)
                }
            });
        };
    });