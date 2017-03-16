const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function Login ($scope, $http, $state){
  $scope.login = function (data) {
    var url = `${SERVER_URL}/login`;
    $http.post(url, data).then(resp => {
      $state.go('home');
    });
  };
}

Login.$inject = ['$scope', '$http', '$state'];

export default Login;
