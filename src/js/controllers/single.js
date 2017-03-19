const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function Single ($scope, $http, $state, $cookies, $rootScope){
  var chosen = $cookies.get('chosenPic');

  function init () {

    if($rootScope.loggedIn){
      $http.get(`${SERVER_URL}/photos/${chosen}`).then(resp => {
        $scope.photo = resp.data;
      });
    }else{
      $state.go('signup');
    }
  }

  $http.get(`${SERVER_URL}/likes/${chosen}`).then(resp => {
    $scope.likes = resp.data.likes;
  }).catch(error => {
    $scope.notifications.push(error.data.message);});

  $scope.comments = [];

  $http.get(`${SERVER_URL}/comments/${chosen}`).then(resp => {
    $scope.comments = resp.data;
  })
  .catch(error => {
    console.log(error.data.message);});

  init();

  $scope.signOut = function () {
    $rootScope.loggedIn = false;
    $cookies.remove('access-token');
    $http.defaults.headers.common['access-token'] = null;
    $state.go('signup');
  };

  $scope.dolike = function(){
    var numLikes = $scope.likes;
    numLikes++;
    var data = { likes: numLikes };
    $scope.likes++;


    var url = `${SERVER_URL}/likes/${chosen}`;
    $http.put(url, data).then(resp => {
    }).catch(error => {
      console.log(error);
    });
  };

  $scope.enter = function (data) {
    var url = `${SERVER_URL}/comments/${chosen}`;
    $http.post(url, data).then(resp => {
      $scope.recent = resp.data.text;
      $scope.comment.text = '';
    }).catch(error => {
      console.log(error);
    });
  };

}


Single.$inject = ['$scope', '$http', '$state', '$cookies', '$rootScope'];

export default Single;
