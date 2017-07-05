'use strict'

var simpleForum = angular.module('simpleForum', ['ngRoute', 'ng-breadcrumbs'])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.when('/login',
        {
            templateUrl: "./views/login.html",
            controller: "loginController",
            label: "Login"
        }),
        $routeProvider.when('/signUp',
        {
            templateUrl: "./views/signUp.html",
            controller: "signupController",
            label: "Signup"
        }),
        $routeProvider.when('/landing',
        {
            templateUrl: "./views/landing.html",
            controller: "landingController",
            label: "landing"
        })
    });