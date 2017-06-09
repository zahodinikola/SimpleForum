simpleForum.controller("loginController",
function loginController($scope, inputValidatorService) {

    $scope.userInput = {
        login: "",
        email: "",
        password: ""
    };
   
    $scope.enteredValidEmail = false;
    $scope.enteredValidPassword = false;
    $scope.submitDisabled = true;
    $scope.authorisationErrorMessage = " ";    

    function isEmailValid(inputEmail) {
        
        var emailValidity = false;
        if (inputEmail !== undefined) {
            var x = inputEmail.toString();
            var pattern = /[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,3}/;
            emailValidity = pattern.test(x);
        }

        return emailValidity;
    }

    // 1. try to clean up / remove redundant code in place
    // 2. try to see if the function has more than one responsibility - split if possible and make sense
    // 3. remove references to local variables or objects replacing them with function parameters
    // 4. create new service and inject it into controller
    // 5. move the function to the service and update calls to the function


    // Controller - stateful
    // Service    - stateless

    $scope.validateEmail = function() {

        $scope.enteredValidEmail = inputValidatorService.isEmailValid($scope.userInput.email);
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