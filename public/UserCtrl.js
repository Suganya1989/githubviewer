// Code goes here
(function(){
var app=angular.module("myModule");
app.controller('UserCtrl',['$scope','github','$log','$routeParams',function($scope, github,$log,$routeParams){
  
  $scope.username=$routeParams.username;
  $scope.repoSort="name";
  
 $log.info("searching for "+$scope.username)
   github.getUser($scope.username).then(function(response){
    $scope.message=response.data.avatar_url;
    github.getRepos(response.data.repos_url).then(function(response1){
      $scope.repos=response1.data;

    })
    });
  
}]);
})();
