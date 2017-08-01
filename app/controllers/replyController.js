'use strict'

simpleForum.controller('replyController', function($scope) {
    $scope.saveReply = function() {
        alert('saving');
    };
    $scope.cancel = function() {
        alert('cancelling');
    };
});