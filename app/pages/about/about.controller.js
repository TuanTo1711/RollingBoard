(function () {
  "use strict";

  angular.module("app").controller("AboutController", AboutController);

  AboutController.$inject = ["$scope"];

  function AboutController($scope) {
    var ctrl = $scope;

    init();

    function init() {
      ctrl.VectorIcon = "app/assets/icon/Vector.svg";
    }
  }
})();
