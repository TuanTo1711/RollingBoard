(function () {
  "use strict";

  angular.module("app").component("offcanvas", offcanvas());
  offcanvas.$inject = ["$state", "AuthService"];
  function offcanvas() {
    function offcanvasController($state, AuthService) {
      var vm = this;
      init();

      function init() {
        vm.logout = logout;
      }

      function logout() {
        console.log(true);
        $state.go("home");
        return AuthService.logout();
      }
    }

    return {
      bindings: {},
      templateUrl: "app/components/offcanvas/offcanvas.html",
      controller: offcanvasController,
      controllerAs: "vm",
    };
  }
})();
