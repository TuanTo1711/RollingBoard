(function () {
  "use strict";

  angular.module("app").controller("ErrorController", ErrorCtrl);

  ErrorCtrl.$inject = ["$scope"];

  function ErrorCtrl($scope) {
    var vm = $scope;

    init();

    function init() {}
  }
})();
