simpleForum.controller("loginController",
function loginController($scope, validator) {

    $scope.userInput = {
        login: "",
        email: "",
        password: ""
    };
   
    $scope.enteredValidEmail = false;
    $scope.enteredValidPassword = false;
    $scope.submitDisabled = true;
    $scope.authorisationErrorMessage = " ";
    
    $scope.validateEmail = function() {
        
        $scope.enteredValidEmail = validator.isEmailValid($scope.userInput.email);
        $scope.submitDisabled = $scope.isSubmitDisabled();
    
    };

    $scope.validatePassword = function() {
        
        $scope.enteredValidPassword = validator.isPasswordValid($scope.userInput.password);
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

    $scope.validateUser = function(loginForm) {
        
        console.log(loginForm);
        
        if(validator.isValidUser($scope.userInput.email, $scope.userInput.password))
        {
            $scope.authorisationErrorMessage = " ";
        } else {
            $scope.authorisationErrorMessage = "Wrong email or password";
        }
        
    };

    $scope.isSubmitDisabled = function() {
        var _submitDisabled = !(($scope.enteredValidEmail)&&($scope.enteredValidPassword));
        return _submitDisabled;
    };
})