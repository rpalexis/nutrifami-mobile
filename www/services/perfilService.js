nutrifamiMobile.factory('PerfilService', function($http) {
    var service = {};
    service.editarUsuario = function(usuario, callback) {
        nutrifami.editarUsuarioActivo(usuario, function(response) {
            callback(response);
        });

    };

    service.agregarFamiliar = function(familiar, callback) {
        nutrifami.agregarFamiliar(familiar, function(response) {
            callback(response);
        });

    };

    service.agregarUsuario = function(familiar, callback) {
        nutrifami.agregarUsuario(familiar, function(response) {
            callback(response);
        });

    };


    service.getLocation = function(callback) {



        $http.get('js/location.json').then(function(response) {
            console.log(response);
            callback(response.data);

        }, function errorCallback(err) {
            console.log(err);
            callback({});

        });



    }






    return service;
});