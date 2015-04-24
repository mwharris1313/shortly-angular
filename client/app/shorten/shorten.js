angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {url:''};
  $scope.addLink = Links.addLink;

  $scope.magic = function( text ){
    $scope.conjure = text;

  }
});
