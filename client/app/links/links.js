angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  console.log('***************** LINKS.data:', Links.data)
//  $scope.str = 'test';
  $scope.data = {}; // EXPERIMENT
  $scope.data.links = [{},{},{}];
  // $scope.data.links = [{
  //   name: 'somesite1',
  //   origUrl: 'http://www.google.com',
  //   shortenedUrl: 'someroute3'
  // }, // TODO: figure out official format of data
  // {
  //   name: 'somesite2',
  //   origUrl: 'http://www.somesite2.com',
  //   shortenedUrl: 'someroute3'
  // },
  // {
  //   name: 'somesite3',
  //   origUrl: 'http://www.somesite3.com',
  //   shortenedUrl: 'someroute3'
  // }]; // NOTE TO SELF: figure out how to fill this with non-hard-coded values.
  $scope.getLinks = Links.getLinks;
  $scope.getLinks(function(){}); // EXPERIMENT

});
