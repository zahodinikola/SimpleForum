'use strict'

simpleForum.controller('createTopicController', function($scope) {
    $scope.save = function() {
        alert('saving');
    };
    $scope.cancel = function() {
        alert('cancelling');
    };
});