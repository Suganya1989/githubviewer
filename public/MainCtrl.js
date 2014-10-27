// Code goes here
(function () {

  var myApp = angular.module("myModule");
  myApp.controller('MainCtrl', ['$scope', '$interval', '$log', '$location',
  function ($scope, $interval, $log, $location) {
      $scope.username = "satish860";
      $scope.repoSort = "name";
      var countdownInterval = null;
      $scope.Search = function () {
        if (countdownInterval) {
          $interval.cancel(countdownInterval);
          $scope.countDown = null;
        }
        $location.path("/user/" + $scope.username);
      };
      $log.info("Chaanging the url to " + "/user/" + $scope.username);



      $scope.countDown = 20;
      var doCountDown = function () {
        $log.info("Decrement countdown called");
        $log.info("Countdown: " + $scope.countDown);
        $scope.countDown -= 1;
        if ($scope.countDown < 1) {
          $log.info("Starting the countdown search");
          $scope.Search();
        }
      }
      var startCountDown = function () {
        countdownInterval = $interval(doCountDown, 1000, $scope.countDown);
      }
      startCountDown();

    }]);
})();
