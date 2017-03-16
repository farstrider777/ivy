const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function Home ($scope, $http, $state){

  $scope.photos = [];

  function init () {
    $http.get(`${SERVER_URL}/getPhotos`).then(resp => {
      $scope.photos = resp.data;
      //console.log($scope.contacts)
    });
  }

  init();

}

Home.$inject = ['$scope', '$http', '$state'];

export default Home;
