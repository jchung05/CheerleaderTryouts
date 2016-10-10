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
        
        $scope.editTask = function() {
        
        };

        $scope.completeTask = function() {
            angular.forEach($scope.todoList, function(task) {
            if (task.done) {
                $scope.todoList.splice($scope.todoList.indexOf(task),1)
                }
            });
        };
    });