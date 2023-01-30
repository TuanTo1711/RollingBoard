(function () {
  "use strict";

  angular.module("app").controller("LoginController", LoginController);

  LoginController.$inject = ["$scope"];

  function LoginController($scope) {
    var ctrl = $scope;

    init();

    function init() {
      ctrl.CheckIcon = "app/assets/icon/Check.svg";
    }
  }
})();
