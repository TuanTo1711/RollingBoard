(function () {
  "use strict";

  angular.module("app").controller("SignUpController", SignUpController);

  SignUpController.$inject = ["AuthService"];

  function SignUpController(AuthService) {
    const ctrl = this;

    init();

    function init() {
      ctrl.CheckIcon = "app/assets/icon/Check.svg";
      ctrl.signUp = signUp;
    }

    function signUp() {
      AuthService.signup({ FormData });
    }
  }
})();
