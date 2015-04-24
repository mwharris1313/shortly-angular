angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {url:''};
  $scope.addLink = Links.addLink;

  $scope.validate = function(link) {
    var url = link.url;
    if (url === undefined || url === null || url === '' || url.indexOf('.') === -1) {
      alert('Please correct input text to a valid web link');
    } else {
     $scope.addLink(link);
    }

  };

});
