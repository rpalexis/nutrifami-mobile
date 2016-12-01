nutrifamiMobile.factory('PerfilService', function() {
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
    return service;
});
