'use strict';

simpleForum.controller('mainController', ['$scope','breadcrumbs',
    function mainController($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }])