(function () {
  "use strict";

  angular.module("app").controller("HomeController", HomeController);

  HomeController.$inject = ["$scope"];

  function HomeController($scope) {
    var ctrl = $scope;

    init();

    function init() {
      ctrl.IntegrateIcon = "app/assets/icon/GroupIntegrate.svg";
      ctrl.ColaborateIcon = "app/assets/icon/GroupColaborate.svg";
      ctrl.SucceedIcon = "app/assets/icon/GroupSucceed.svg";
      ctrl.CheckIcon = "app/assets/icon/Check.svg";
      ctrl.ProjectOverview = "app/assets/icon/ProjectOverview.svg";
      ctrl.PackageOverview = "app/assets/icon/PackageOverview.svg";
      ctrl.SignUpOverview = "app/assets/icon/SignUpOverview.svg";
    }
  }
})();
