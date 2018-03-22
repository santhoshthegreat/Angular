var templatesExample = angular.module('Templates', ['ngRoute']);
templatesExample.controller('HomeController', function ($scope) {
    $scope.greeting = "Welcome to the application.";
});
templatesExample.controller('AboutController', function ($scope) {
    $scope.content = "As a software developer, I've always loved to build things...";
});

templatesExample.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'embedded.home.html',
        controller: 'HomeController'
    }).
    when('/about', {
        templateUrl: 'embedded.about.html',
        controller: 'AboutController'
    }).
    otherwise({
        redirectTo: '/home'
    });
});