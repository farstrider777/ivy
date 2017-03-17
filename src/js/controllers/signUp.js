const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function SignUp ($scope, $http, $state){
  // $scope.test2 = function(){
  //   console.log('hi from signup')
  // };


  $scope.enter = function (data) {
    var url = `${SERVER_URL}/users`;
    $http.post(url, data).then(resp => {
      $state.go('login');
    });
  };


}

SignUp.$inject = ['$scope', '$http', '$state'];

export default SignUp;
