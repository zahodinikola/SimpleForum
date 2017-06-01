simpleForum.controller("loginController",
function($scope) {

    $scope.inputUserLogin = "login";
    $scope.inputUserEmail = "login@mail.com";
    $scope.inputUserPassword = "password";
    $scope.enteredValidEmail = "false";
    $scope.enteredValidPassword = "false";
    $scope.submitDisabled = "true";
    $scope.emailErrorMessage = "";
    $scope.passwordErrorMessage = "";

    $scope.isValidEmail = function() {
        var x = $scope.inputUserEmail.toString();
        var pattern = /[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,3}/;
        if (pattern.test(x)) {
            $scope.enteredValidEmail = "true";
            $scope.emailErrorMessage = "";
        }else{
            $scope.enteredValidEmail = "false";
            $scope.emailErrorMessage = "invalid email";
        }
        $scope.submitDisabled = $scope.isSubmitDisabled();
    };

    $scope.isValidPassword = function() {
        var x = $scope.inputUserPassword.toString();
        var pattern = /[0-9a-zA-z]{6,}/;
        if (pattern.test(x)) {
            $scope.enteredValidPassword = "true";
            $scope.passwordErrorMessage = "";
        }else{
            $scope.enteredValidPassword = "false";
            $scope.passwordErrorMessage = "password too short";
        }
        $scope.submitDisabled = $scope.isSubmitDisabled();
    };
    
    $scope.flipVisibility = function() {
        var x = document.getElementById("showPassword").checked;
        if(x == true) {
            document.getElementById("passwordField").setAttribute("type", "text");
        } else {
            document.getElementById("passwordField").setAttribute("type", "password");
        }
    };

    $scope.isValidUser = function() {
        for(var i = 0; i < loginData.length; i++ )
        {
           if (loginData[i].email === $scope.inputUserEmail
                &&loginData[i].password === $scope.inputUserPassword)
           {
                return alert("gotcha");                
            }
        }
        return alert("nope");
    };

    $scope.isSubmitDisabled = function() {
        var submitDisabled = $scope.enteredValidEmail&&$scope.enteredValidPassword;
        return submitDisabled;
    };
})