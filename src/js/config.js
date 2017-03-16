function Config ($stateProvider, $urlRouterProvider) {
  //console.log($stateProvider);
  //console.log($urlRouterProvider);

  $stateProvider
     .state('signup', {
       url: '/signup',
       templateUrl: 'templates/signup.tmp.html',
       controller: 'SignUp',
     })
     .state('page-not-found', {
       url: '/not-found',
       template: `<h2>page not found</h2>
       <a href="/#!">Click here to go home</a>`
     })
     .state('login', {
       url: '/login',
       templateUrl: 'templates/login.tmp.html',
       controller: 'Login'
     })
     .state('home', {
       url: '/home',
       templateUrl: 'templates/home.tmp.html',
       controller: 'Home'
     })

  $urlRouterProvider.when('', '/signup');
  $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
