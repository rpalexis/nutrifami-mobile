nutrifamiLogin.controller('LoginController', ['$scope', '$location', 'AuthenticationService',
    function ($scope, $location, AuthenticationService) {
        'use strict';

        document.addEventListener('deviceready', function () {
            // reset login status

            AndroidFullScreen.immersiveMode();
            AuthenticationService.ClearCredentials();
            localStorage.clear();

            $scope.login = function () {
                $scope.dataLoading = true;
                AuthenticationService.Login($scope.username, $scope.password, function (response) {
                    if (response.success) {
                        AuthenticationService.SetCredentials($scope.username, $scope.password, response.message);
                        $location.path('/');
                    } else {
                        $scope.error = response.message;
                        $scope.dataLoading = false;
                    }
                });
            };


        }, false);


    }]);
