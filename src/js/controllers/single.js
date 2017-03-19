const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function Single ($scope, $http, $state, $cookies, $rootScope, $window){
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

  $http.get(`${SERVER_URL}/likes/${chosen}`).then(resp => {
      $scope.likes = resp.data.likes;
  })

  $scope.comments = []

  $http.get(`${SERVER_URL}/comments/${chosen}`).then(resp => {
      $scope.comments = resp.data;
  })
  // .catch(error => {
  // $scope.notifications.push(error.data.message);

  init();

  $scope.dolike = function(){
    var numLikes = $scope.likes
    numLikes++
    var data = { likes: numLikes }
    $scope.likes++;


    var url = `${SERVER_URL}/likes/${chosen}`;
    $http.put(url, data).then(resp => {

      // console.log(resp.data.text);
      // $window.location.reload ();

    }).catch(error => {
      console.log(error);
    });
  }

  $scope.enter = function (data) {

    var url = `${SERVER_URL}/comments/${chosen}`;
    $http.post(url, data).then(resp => {

      $scope.recent = resp.data.text;
      $scope.comment.text = '';
    //  $window.location.reload();

    }).catch(error => {
      console.log(error);
    });
  };

}


Single.$inject = ['$scope', '$http', '$state', '$cookies', '$rootScope', '$window'];

export default Single;
