(function () {
  "use strict";

  angular.module("app").controller("SignUpController", SignUpController);

  SignUpController.$inject = ["AuthService", "Validator"];

  function SignUpController(AuthService, Validator) {
    const ctrl = this;

    init();

    function init() {
      ctrl.CheckIcon = "app/assets/icon/Check.svg";
      ctrl.signUp = signUp;
    }

    function signUp() {
      Validator.validation({
        form: "#SignUpForm",
        formGroupSelector: ".form-group",
        errorSelector: ".form-message",
        rules: [
          Validator.isRequired("#name", ""),
          Validator.isRequired("#usernameSignUp", ""),
          Validator.isRequired("#passwordSignUp", ""),
        ],
        onSubmit: function (data) {
          console.log(data);
          AuthService.signup(data);
        },
      });
    }
  }
})();
