(function () {
  "use strict";

  angular.module("app").controller("BoardController", BoardCtrl);

  BoardCtrl.$inject = ["$http", "$stateParams"];
  function BoardCtrl($http, $stateParams) {
    var vm = this;

    init();

    function init() {
      $http
        .get("http://localhost:3000/tasks")
        .then((result) => {
          vm.tasks = Array.from(result.data).filter((task) => {
            return task.title.toLowerCase() == $stateParams.name.toLowerCase();
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
})();
