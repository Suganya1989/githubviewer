(function(){
  var github= function($http){
  var getUser= function(username){
      return $http.get("https://api.github.com/users/"+username).then(function(response){
        return response;
      });
  }
  
  var getRepos=function(repos_url){
    return $http.get(repos_url).then(function(response1){
      return response1;
  })
  };
  return{
    getUser:getUser,
    getRepos:getRepos
  };
};
var mod= angular.module('myModule');
mod.factory('github',github);
}());