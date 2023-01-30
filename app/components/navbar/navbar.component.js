(function () {
  "use strict";

  angular.module("app").component("uiNavbar", uiNavbar());

  uiNavbar.$inject = ["$scope"];

  function uiNavbar() {
    function uiNavbarController($scope) {
      var vm = $scope;

      init();
      function init() {
        vm.Logo = "app/assets/icon/favicon.svg";
      }
      
      // kiem tra neu da dang nhap 
      /* chua hoan thanh */
    }

    return {
      bindings: {},
      templateUrl: "app/components/navbar/navbar.html",
      controller: uiNavbarController,
      controllerAs: "${NavbarCtrl}",
    };
  }
})();