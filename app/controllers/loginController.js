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
        // alert($scope.inputUserLogin);
        for(var i = 0; i < loginData.length; i++ )
        {
        //    alert(loginData[i].userName);
           if (loginData[i].userName === $scope.inputUserLogin)
           {
                return alert("gotcha");
                
            }
        }
        return alert("nope");
    }
})