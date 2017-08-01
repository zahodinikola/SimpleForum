'use strict'

simpleForum.controller('replyQuotedController', function($scope) {
    $scope.saveReply = function() {
        alert('saving');
    };
    $scope.cancel = function() {
        alert('cancelling');
    };
});