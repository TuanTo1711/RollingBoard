(function () {
  "use strict";

  angular.module("app").controller("AboutController", AboutCtrl);

  AboutCtrl.$inject = ["$scope"];

  function AboutCtrl($scope) {
    var vm = $scope;

    init();

    function init() {}
  }
})();
