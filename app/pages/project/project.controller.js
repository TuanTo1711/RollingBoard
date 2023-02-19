(function () {
  "use strict";

  angular.module("app").controller("ProjectController", ProjectCtrl);

  ProjectCtrl.$inject = ["$http"];
  function ProjectCtrl($http) {
    var ctrl = this;

    init();

    function init() {
      initData();
      ctrl.addItem = addItem;
    }

    function initData() {
      $http
        .get("http://localhost:3000/boards")
        .then((result) => {
          ctrl.boards = result.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function addItem(title, description) {
      console.log(title, description);
      $http
        .post(
          "http://localhost:3000/boards",
          JSON.stringify({ title, description })
        )
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }
})();
