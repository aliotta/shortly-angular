angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Auth, Links) {
  // Your code here
  if (!Auth.isAuth()) {
    $location.path('/signin');
  }

  $scope.postLink = function () {
    Links.postLink($scope.newUrl);
    $scope.newUrl = "";
  };

});
