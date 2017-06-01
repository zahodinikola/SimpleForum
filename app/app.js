'use strict'

var simpleForum = angular.module('simpleForum', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/login',
        {
            templateUrl: "./views/login.html",
            controller: "loginController"
        })
    });