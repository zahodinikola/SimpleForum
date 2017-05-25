simpleForum.controller("loginController",
function($scope) {
    // test outputs
    $scope.checkLoginController = "Login controller is working";
    $scope.out = loginData[0].userName;
    // end of test outputs

    $scope.inputUserLogin = "";
    $scope.inputUserPassword = "";


    $scope.isValidUser = function() {
        alert("entered isValidUser");
        for ( var entry in loginData)
        {
            alert(entry.userName);
            if (entry.userName === inputUserLogin && entry.password === inputUserPassword)
            {
                alert("gotcha");
            }
        }
        alert("nope");
    }
})