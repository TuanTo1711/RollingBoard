(function () {
  "use strict";

  angular.module("app").controller("SignUpController", SignUpController);

  SignUpController.$inject = ["$scope"];

  function SignUpController($scope) {
    var ctrl = $scope;

    init();

    function init() {
      ctrl.CheckIcon = "app/assets/icon/Check.svg";
    }
  }
})();
