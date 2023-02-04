(function () {
  "use strict";

  angular.module("app").controller("LoginController", LoginController);

  LoginController.$inject = ["$state", "AuthService"];

  function LoginController($state, AuthService) {
    var ctrl = this;
    ctrl.login = login;
    ctrl.logout = logout;
    ctrl.isAuthenticated = isAuthenticated;

    init();

    function init() {
      ctrl.CheckIcon = "app/assets/icon/Check.svg";
    }

    function login() {
      AuthService.login(ctrl.username, ctrl.password)
        .then(function (response) {
          $state.go("home");
        })
        .catch(function (error) {
          ctrl.error = error.data;
        });
    }

    function logout() {
      AuthService.logout();
    }

    function isAuthenticated() {
      return AuthService.isAuthenticated();
    }
  }
})();
