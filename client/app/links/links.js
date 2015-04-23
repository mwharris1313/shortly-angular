angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  console.log('***************** LINKS.data:', Links.data)
  $scope.data = {}; // EXPERIMENT
  $scope.data.links = [{}, {}, {}]; // NOTE TO SELF: figure out how to fill this with non-hard-coded values.
  $scope.getLinks = Links.getLinks;
  $scope.getLinks(); // EXPERIMENT

});
