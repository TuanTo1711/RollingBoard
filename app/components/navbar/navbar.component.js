(function () {
  "use strict";

  angular.module("app").component("uiNavbar", Navbar());

  Navbar.$inject = ["AuthService"];

  function Navbar() {
    function NavbarController(AuthService) {
      const vm = this;

      init();
      vm.isAuthenticated = AuthService.isAuthenticated;
      vm.logout = AuthService.logout;

      function init() {
        vm.Logo = "app/assets/icon/favicon.svg";
      }
    }

    return {
      templateUrl: "app/components/navbar/navbar.html",
      controller: NavbarController,
      controllerAs: "vm",
    };
  }
})();
