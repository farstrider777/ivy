const SERVER_URL = 'https://mysterious-tundra-23151.herokuapp.com';

function Home ($scope, $http, $state){

  $scope.photos = [];

  function init () {
    $http.get(`${SERVER_URL}/photos`).then(resp => {
      console.log(resp);
      $scope.photos = resp.data;
      console.log($scope.photos)
    });
  }

  init();

}

Home.$inject = ['$scope', '$http', '$state'];

export default Home;
