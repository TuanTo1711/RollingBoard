(function () {
  "use strict";

  angular.module("app").controller("LoginController", LoginController);

  LoginController.$inject = ["$state", "AuthService", "Validator"];

  function LoginController($state, AuthService, Validator) {
    const ctrl = this;

    init();

    function init() {
      ctrl.CheckIcon = "app/assets/icon/Check.svg";
      ctrl.login = login;
      ctrl.validate = Validator.validation({
        form: "#LoginForm",
        formGroupSelector: ".form-group",
        errorSelector: ".form-message",
        rules: [
          Validator.isRequired("#username", "Khong duoc de trong"),
          Validator.isRequired("#password", "Khong duoc de trong"),
        ],
        //call API
        onSubmit: function (data) {
          console.log(data);
        },
      });
    }

    function login() {
      AuthService.login(this.username, this.password)
        .then(function (response) {
          if (response) {
            $state.go("home");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
})();
