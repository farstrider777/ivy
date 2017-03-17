const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function Login ($scope, $http, $state, $cookies){
  $scope.login = function (data) {
    console.log($cookies);
    var url = `${SERVER_URL}/login`;
    $http.post(url, data).then(resp => {
      $cookies.put('access-token', resp.data.token)
      $state.go('home');
    });
  };
}

Login.$inject = ['$scope', '$http', '$state', '$cookies'];

export default Login;
