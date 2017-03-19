const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function Home ($scope, $http, $state, $cookies, $rootScope){

  $scope.photos = [];

  function init () {
    if($rootScope.loggedIn){
      $http.get(`${SERVER_URL}/photos`).then(resp => {
        $scope.photos = resp.data;
      });
    }else{
      $state.go('signup');
    }
  }

  init();

  $scope.signOut = function () {
    $rootScope.loggedIn = false;
    $cookies.remove('access-token');
    $http.defaults.headers.common['access-token'] = null;
    $state.go('signup');
  };

  $scope.photoPick = function(id) {
    $cookies.put('chosenPic', id);
    $state.go('single');
  };

}

Home.$inject = ['$scope', '$http', '$state', '$cookies', '$rootScope'];

export default Home;
