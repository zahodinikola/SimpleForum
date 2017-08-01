'use strict'

var simpleForum = angular.module('simpleForum', ['ngRoute', 'ng-breadcrumbs']);

simpleForum.config(function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.when('/login',
        {
            templateUrl: "./views/login.html",
            controller: "loginController",
            label: "Login"
        })
        .when('/signUp',
        {
            templateUrl: "./views/signUp.html",
            controller: "signupController",
            label: "Signup"
        })
        .when('/editProfile',
        {
            templateUrl: "./views/editProfile.html",
            controller: "editProfileController",
            label: "EditProfile"
        })
        .when('/groups',
        {
            templateUrl: "./views/groups.html",
            controller: "groupsController",
            label: "Groups"
        })
        .when('/topics',
        {
            templateUrl: "./views/topics.html",
            controller: "topicsController",
            label: "Topics"
        })
        .when('/viewTopic',
        {
            templateUrl: "./views/viewTopic.html",
            controller: "viewTopicController",
            label: "View topic"
        })
        .when('/createTopic',
        {
            templateUrl: "./views/createTopic.html",
            controller: "createTopicController",
            label: "Create topic"
        })
        .when('/reply',
        {
            templateUrl: "./views/reply.html",
            controller: "replyController",
            label: "Reply"
        })
        .when('/replyQuoted',
        {
            templateUrl: "./views/replyQuoted.html",
            controller: "replyQuotedController",
            label: "Reply quoted"
        });
    });