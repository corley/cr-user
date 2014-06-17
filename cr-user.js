angular.module('cr.user', [])
.factory('crUser', ['$crUser', function($crUser) {
    
    return {
        setKey: function(sign) {
            $crUser.getAuthHandler().setSign(sign);
        }
    };
}])
.provider('$crUser', function() {
    var _config = {
        authHandler: null   
    };
    
    this.setAuthHandler = function (authHandler) {
        _config.authHandler = authHandler;
    };

    this.getAuthHandler = function() {
        return _config.authHandler;
    };
    
    this.$get = function() {
        return this;
    };
});