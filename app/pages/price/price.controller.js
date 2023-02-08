(function () {
  "use strict";

  angular.module("app").controller("PriceController", PriceController);

  PriceController.$inject = ["$scope"];

  function PriceController($scope) {
    var vm = this;

    init();

    function init() {}
  }
})();
