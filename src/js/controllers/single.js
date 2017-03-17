const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function Single ($scope, $http, $state, $cookies, $rootScope){
  var chosen = $cookies.get('chosenPic');

  function init () {

    if($rootScope.loggedIn){
      $http.get(`${SERVER_URL}/photos/${chosen}`).then(resp => {
        $scope.photo = resp.data;
      })
      // .catch(error => {
      //   $scope.notifications.push(error.data.message);
    }else{
      $state.go('signup');
    }
  }

  $scope.comments = []

  $http.get(`${SERVER_URL}/comments/${chosen}`).then(resp => {
      $scope.comments = resp.data;
  })
  // .catch(error => {
  // $scope.notifications.push(error.data.message);

  init();

  $scope.enter = function (data) {

    var url = `${SERVER_URL}/comments/${chosen}`;
    $http.post(url, data).then(resp => {

      console.log(resp.data.text);
      $state.go('home');

    }).catch(error => {
      console.log(error);
    });
  };

}


Single.$inject = ['$scope', '$http', '$state', '$cookies', '$rootScope'];

export default Single;
