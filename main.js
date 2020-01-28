var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));


/*var PodioJS = require('podio-js').api;

var podio = new PodioJS({ 
  authType: 'client', 
  clientId: 'test-usage', 
  clientSecret: 'zBTDCMZHuk62qTMbvkRZmfD9hhWjVP5hheM5xCu2nbx93BzaEArR7vEmVIKoD7kB' 
});

var redirectURL = 'https://www.myapp.com';

// isAuthenticated either gets the cached accessToken 
// or will check whether it is present in the hash fragment
podio.isAuthenticated().then(function(){
	console.log("auth")
  // ready to make API calls...
	podio.request('GET', '/tasks', null, function(responseData) {
	  // do something with the data  
	});

}).catch(function(){
  if (typeof podio.hasAuthError == "function" && podio.hasAuthError()) {
    console.log(podio.getAuthError());
  } else {
    // start authentication via link or redirect
    console.log('nah');
  }
});*/