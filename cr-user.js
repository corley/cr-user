angular.module('cr.user', [])
.factory('crUser', ['$crUser', '$rootScope', function($crUser, $rootScope) {

    if($crUser.getAuthSession()){
        $rootScope.$emit("$crUserResumeSession", {identity: $crUser.getAuthSession()['cr-user']});
    }

    return {
        setCredentials: function(credentials) {
            if($crUser.getAuthHandler()) {
                $crUser.getAuthHandler().setSign(credentials);
            }
        },
        login: function(userData, authCredentials) {
            $crUser.getAuthSession()['cr-user'] = userData;
            if(authCredentials && $crUser.getAuthHandler()) {
                $crUser.getAuthHandler().setSign(authCredentials);
            }
            $rootScope.$emit("$crUserPostLogin", {});
//            console.log("my storage in", $crUser._config.authSession);
        },
        logout: function(){
            $crUser.voidSession();
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
    
    this.voidSession = function() {
       if(_config.authSession) {
           delete _config.authSession['cr-user'];
       }
       if(_config.authHandler) {
           _config.authHandler.voidSign();
       }
    };

    this.$get = function() {
        return this;
    };
});