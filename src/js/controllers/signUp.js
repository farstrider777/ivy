const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function SignUp ($scope, $http, $state, $cookies){

  var token = $cookies.get('access-token');

  function init(){
    if (token) {
      $state.go('home');
    }
  }

  init();

  $scope.enter = function (data) {
    var url = `${SERVER_URL}/users`;
    $http.post(url, data).then(resp => {
      $state.go('login');
    });
  };


}

SignUp.$inject = ['$scope', '$http', '$state', '$cookies'];

export default SignUp;
