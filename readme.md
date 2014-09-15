# cr-user
* NPM dependnecies  [![Dependency Status](https://www.versioneye.com/user/projects/5416f8cd69b273426e00008e/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5416f8cd69b273426e00008e)
* Bower dependecies [![Dependency Status](https://www.versioneye.com/user/projects/5416f8cd69b273385e00008f/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5416f8cd69b273385e00008f)
* Travis            [![Build Status](https://travis-ci.org/corley/cr-user.svg?branch=master)](https://travis-ci.org/corley/cr-user)


``` shell
$. bower install
```

### Configuration
Inject in your project 'cr.user' then you can edit the settings with the $crUserProvider.


``` javascript
//then add base 64 auth handler to cr-user
$crUserProvider.setAuthHandler($crAuthBasic);
```

The example above will add the Basic Auth layer. Other settings will be available.
