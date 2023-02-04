(function () {
  "use strict";

  angular.module("app").controller("BoardController", BoardCtrl);

  BoardCtrl.$inject = ["$scope"];
  function BoardCtrl($scope) {
    var ctrl = this;

    init();

    function init() {}
  }
})();
