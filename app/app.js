'use strict'

var simpleForum = angular.module('simpleForum', ['ngRoute', 'ng-breadcrumbs']);

// simpleForum.config(function($routeProvider, $locationProvider) {
//         $locationProvider.hashPrefix('');
//         $routeProvider.when('/login',
//         {
//             templateUrl: "./views/login.html",
//             controller: "loginController",
//             label: "Login"
//         })
//         .when('/signUp',
//         {
//             templateUrl: "./views/signUp.html",
//             controller: "signupController",
//             label: "Signup"
//         })
//         .when('/landing',
//         {
//             templateUrl: "./views/landing.html",
//             controller: "landingController",
//             label: "landing"
//         })
//     });