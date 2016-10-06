angular.module('myTaskList', ['ngResource','ngRoute','ngSanitize'])
    .config(function ($path) {
        var ctrlPath = {
            templateUrl: 'index.html',
            controller: 'TLCtrlr',
            resolve: {
                store: function (taskArr) {
                    return taskArr.get();
                };
            }
        };
        
        //Append ctrlPath route to the root
        $path
            .when('/', ctrlPath)
            .when('/:status', ctrlPath)
            .otherwise({
                redirectTo: '/'
            });
    });