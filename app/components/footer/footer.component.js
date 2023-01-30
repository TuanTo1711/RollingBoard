(function () {
  "use strict";

  angular.module("app").component("uiFooter", uiFooter());

  uiFooter.$inject = ["$scope"];

  function uiFooter() {
    function uiFooterController($scope) {
      var ctrl = $scope;

      init();
      function init() {
        ctrl.currentYear = new Date().getFullYear();
      }
    }

    return {
      // bindings: {},
      templateUrl: "app/components/footer/footer.html",
      controller: uiFooterController,
      controllerAs: "${FooterCtrl}",
    };
  }
})();
