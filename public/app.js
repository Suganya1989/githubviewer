(function () {

  var app = angular.module('myModule', ["ngRoute"]);

  app.config(function ($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "main.html",
      controller: "MainCtrl"
    }).when("/main", {
      templateUrl: "main.html",
      controller: "MainCtrl"
    }).when("/user/:username", {
      templateUrl: "user.html",
      controller: "UserCtrl"
    });
  });

}());
