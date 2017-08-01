'use strict'

simpleForum.controller('editProfileController', function($scope) {
    $scope.profile = {
		name: "4unCoder",
		email: "4uncoder@mail.com",
		password: "111",
		avatar: "../app/assets/img/myAvatar 200.png"
	};
	$scope.save = function() {

	};
	$scope.cancel = function() {

	};
});