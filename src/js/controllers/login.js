const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function Login ($scope, $http, $state, $cookies, $rootScope){
  $scope.notifications = [];

  $scope.removeMsg = (msg) => {
    var removed = $scope.notifications.filter(x => x != msg);
    $scope.notifications = removed;
  };


  $scope.login = function (data) {
    console.log($cookies);
    var url = `${SERVER_URL}/login`;
    $http.post(url, data).then(resp => {
      $cookies.put('access-token', resp.data.token);
      $rootScope.loggedIn = true;
      $http.defaults.headers.common['access-token'] = resp.data.token;
      $state.go('home');
    }).catch(error => {
      $scope.notifications.push(error.data.message);
    });
  };
}

Login.$inject = ['$scope', '$http', '$state', '$cookies', '$rootScope'];

export default Login;
