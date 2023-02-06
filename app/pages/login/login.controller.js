(function () {
  "use strict";

  angular.module("app").controller("LoginController", LoginController);

  LoginController.$inject = ["$state", "AuthService"];

  function LoginController($state, AuthService) {
    const ctrl = this;

    init();

    function init() {
      ctrl.CheckIcon = "app/assets/icon/Check.svg";
      ctrl.login = login;
      ctrl.validate = validate;
    }

    function login() {
      AuthService.login(this.username, this.password)
        .then(function (response) {
          console.log(response);
          if (response) {
            $state.go("home");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function validate(form) {}
  }
})();
