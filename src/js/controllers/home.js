const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function Home ($scope, $http, $state, $cookies, $rootScope){

  $scope.photos = [];

  function init () {

    // $http.get(`${SERVER_URL}/photos/likes/all`).then(resp => {
    //   //console.log(resp.data);
    // })


    if($rootScope.loggedIn){
      $http.get(`${SERVER_URL}/photos`).then(resp => {
        $scope.photos = resp.data;
         //console.log($index.photos);
        // for(var count = 0; count < $scope.photos.length; count++){
        //   $scope.photos[count].likes = count;

          //console.log(likeArray[count]);
      //  }

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
