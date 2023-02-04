(function () {
  "use strict";

  angular.module("app").controller("ErrorController", ErrorCtrl);

  ErrorCtrl.$inject = ["$scope"];

  function ErrorCtrl($scope) {
    var ctrl = $scope;

    init();

    function init() {}
  }
})();
