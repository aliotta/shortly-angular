angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $location) {
  if (Auth.isAuth()) {
    Links.getLinks()
      .then(function (links) {
        $scope.links = links;
        console.log(links);
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    $location.path('/signin');
  }

});
