const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function Single ($scope, $http, $state, $cookies, $rootScope){




  function init () {
    console.log($rootScope.photoPick)
    if($rootScope.loggedIn){
      $http.get(`${SERVER_URL}/photos/${$rootScope.photoPick}`).then(resp => {
        //console.log(resp);
        $scope.photo = resp.data;
      })
      // .catch(error => {
      //   $scope.notifications.push(error.data.message);
    }else{
      $state.go('signup');
    }
  }

  $http.get(`${SERVER_URL}/comments/${$rootScope.photoPick}`).then(resp => {
    //console.log(resp);
    console.log(resp);
  })
  // .catch(error => {
  // $scope.notifications.push(error.data.message);

  init();


}


Single.$inject = ['$scope', '$http', '$state', '$cookies', '$rootScope'];

export default Single;
