(function () {
  "use strict";

  angular.module("app").component("offcanvas", offcanvas());

  function offcanvas() {
    function offcanvasController() {
      var vm = this;

      init();

      function init() {}
    }

    return {
      bindings: {},
      templateUrl: "app/components/offcanvas/offcanvas.html",
      controller: offcanvasController,
      controllerAs: "${ctrl}",
    };
  }
})();
