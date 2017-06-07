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
    $scope.emailFieldStyle = {"background-color": "pink"};
    $scope.passwordFieldStyle = {"background-color": "pink"};
    $scope.authorisationErrorMessage = "";
    
    $scope.isValidEmail = function() {
        if($scope.userInput.email !== undefined) {
            var x = $scope.userInput.email.toString();
            var pattern = /[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,3}/;
            if (pattern.test(x)) {
                $scope.enteredValidEmail = "true";
                $scope.emailFieldStyle = {"background-color": "lightgreen"};
            }else{
                $scope.enteredValidEmail = "false";
                $scope.emailFieldStyle = {"background-color": "pink"};
            }
            $scope.submitDisabled = $scope.isSubmitDisabled();
            return;
        };
        $scope.enteredValidEmail = "false";
        $scope.emailFieldStyle = {"background-color": "pink"};
        $scope.submitDisabled = $scope.isSubmitDisabled();
    
    };

    $scope.isValidPassword = function() {
        if($scope.userInput.password !== undefined) {
            var x = $scope.userInput.password.toString();
            var pattern = /[0-9a-zA-z]{6,}/;
            if (pattern.test(x)) {
                $scope.enteredValidPassword = "true";
                $scope.passwordFieldStyle = {"background-color": "lightgreen"};
            }else{
                $scope.enteredValidPassword = "false";
                $scope.passwordFieldStyle = {"background-color": "pink"};
            }
            $scope.submitDisabled = $scope.isSubmitDisabled();
            return;
        };
        $scope.enteredValidPassword = "false";
        $scope.passwordFieldStyle = {"background-color": "pink"};
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
        $scope.authorisationErrorMessage = "Wrong email or password";;
    };

    $scope.isSubmitDisabled = function() {
        var _submitDisabled = ((!$scope.enteredValidEmail)||(!$scope.enteredValidPassword));
        //alert("!(" + $scope.enteredValidEmail + '&&' + $scope.enteredValidPassword + ') = ' + _submitDisabled);
        return _submitDisabled;
    };
})