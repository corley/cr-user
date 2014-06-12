## cr-auth

``` shell
$. bower install
```

### Configuration
Inject in your project 'corley.user' then you can edit the settings with the $crUserProvider.


``` javascript
//then add base 64 auth handler to cr-user
$crUserProvider.setAuthHandler($crAuthBasic);
```

The example above will add the Basic Auth layer. Other settings will be available.