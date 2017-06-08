simpleForum.controller("loginController",
function loginController($scope) {

    $scope.userInput = {
        login: "",
        email: "",
        password: ""
    };
   
    $scope.enteredValidEmail = false;
    $scope.enteredValidPassword = false;
    $scope.submitDisabled = true;
    $scope.authorisationErrorMessage = " ";
    
    $scope.isValidEmail = function() {
        if($scope.userInput.email !== undefined) {
            var x = $scope.userInput.email.toString();
            var pattern = /[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,3}/;
            if (pattern.test(x)) {
                $scope.enteredValidEmail = true;
            }else{
                $scope.enteredValidEmail = false;
            }
            $scope.submitDisabled = $scope.isSubmitDisabled();
            return;
        };
        $scope.enteredValidEmail = false;
        $scope.submitDisabled = $scope.isSubmitDisabled();
    
    };

    $scope.isValidPassword = function() {
        if($scope.userInput.password !== undefined) {
            var x = $scope.userInput.password.toString();
            var pattern = /[0-9a-zA-z]{6,}/;
            if (pattern.test(x)) {
                $scope.enteredValidPassword = true;
            }else{
                $scope.enteredValidPassword = false;
            }
            $scope.submitDisabled = $scope.isSubmitDisabled();
            return;
        };
        $scope.enteredValidPassword = false
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

    $scope.isValidUser = function(userInput, loginForm) {
        
        console.log(loginForm);
        
        for(var i = 0; i < loginData.length; i++ )
        {
           if (loginData[i].email === $scope.userInput.email
                &&loginData[i].password === $scope.userInput.password)
           {
                $scope.authorisationErrorMessage = "";
                return alert("gotcha");                
            }
        }
        $scope.authorisationErrorMessage = "Wrong email or password";
    };

    $scope.isSubmitDisabled = function() {
        var _submitDisabled = !(($scope.enteredValidEmail)&&($scope.enteredValidPassword));
        return _submitDisabled;
    };
})