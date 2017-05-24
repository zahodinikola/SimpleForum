app.controller('loginCtrl', [], function ($scope){

    $scope.inputUsername = '';
    $scope.inputPassword = '';

    $scope.isInputValid = false;

    $scope.tryLogin = function () {

        for (var u in users) {

            if (u.username == inputUsername && u.password == inputPassword)
            {
                return true;
            }
        }

        return false;
    }
})