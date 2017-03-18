const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function Upload ($scope, $http, $state, $cookies, $rootScope){
  $scope.notifications = [];

  $scope.removeMsg = (msg) => {
    var removed = $scope.notifications.filter(x => x != msg);
    $scope.notifications = removed;
  };


  $scope.upload = function (data) {
   console.log($scope.tags);
  //   var url = `${SERVER_URL}/photos/{}/tags`
  console.log($cookies.get('chosenPic'))

  data.tags = $scope.tags;
  console.log(data);
    //$http.post(url, data)`${SERVER_URL}/photos/`;

    var url = `${SERVER_URL}/photos`;
    $http.post(url, data).then(resp => {
      $http.defaults.headers.common['access-token'] = resp.data.token;
      $state.go('home');
    }).catch(error => {
      $scope.notifications.push(error.data.message);
    });
  };
}

Upload.$inject = ['$scope', '$http', '$state', '$cookies', '$rootScope'];

export default Upload;
