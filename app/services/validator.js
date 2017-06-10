'use strict'

simpleForum.factory('validator', function() {
    return {
        isEmailValid:   function(email) {
                            var emailValidity = false;
                            if(email !== undefined) {
                                var x = email.toString();
                                var pattern = /[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,3}/;
                                emailValidity = pattern.test(x);
                            };
                            return emailValidity;
                        },
        
        isPasswordValid: function(password) {
                            var passwordValidity = false;
                            if(password !== undefined) {
                                var x = password.toString();
                                var pattern = /[0-9a-zA-z]{6,}/;
                                passwordValidity = pattern.test(x);       
                            };
                            return passwordValidity;
                        },

        isValidUser:    function(email, password) {
                            for(var i = 0; i < loginData.length; i++ )
                                {
                                    if (loginData[i].email === email && loginData[i].password === password)
                                    {
                                            return true;                
                                    } else {
                                        return false;
                                    }
                                }
                        }
    }
})