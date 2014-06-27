angular.module('cr.user', [])
.factory('crUser', ['$crUser', '$rootScope', function($crUser, $rootScope) {

    return {
        setKey: function(sign) {
            $crUser.getAuthHandler().setSign(sign);
        },
        login: function(o) {
            $crUser.getAuthSession()['cr-user'] = o;
            $rootScope.$emit("$crUserPostLogin", {});
        },
        logout: function(){
            delete $crUser.getAuthSession()['cr-user'];
            $rootScope.$emit("$crUserPostLogout", {});
        },
        getIdentity: function() {
            return $crUser.getAuthSession()['cr-user'];
        },
        setParameter: function(name, value){
            $crUser.getAuthSession()['cr-user'][name] = value;
        },
        getParameter: function(name){
            return $crUser.getAuthSession()['cr-user'][name];
        }
    };
}])
.provider('$crUser', function() {
    var _config = {
            authHandler: null,
            authSession: null
    };

    this.setAuthHandler = function (authHandler) {
        _config.authHandler = authHandler;
    };

    this.getAuthHandler = function() {
        return _config.authHandler;
    };

    this.setAuthSession = function (authSession) {
        _config.authSession = authSession;
    };

    this.getAuthSession = function() {
        return _config.authSession;
    };

    this.$get = function() {
        return this;
    };
});