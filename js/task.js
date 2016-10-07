angular.module('myTaskList', ['ngRoute', 'ngResource','ngSanitize'])
    .config(function ($routeProvider) {

        var ctrlPath = {
            controller: 'tlCtrl',
            templateUrl: 'myTaskList-index.html',
                resolve: {
                    store: function (taskArr) {
                        return taskArr.then(function (module) {
                            module.get();
                            return module;
                        });
                    }
                }
            };

        $routeProvider
            .when('/', ctrlPath)
                .otherwise({
                    redirectTo: '/index.html'
                });
    });