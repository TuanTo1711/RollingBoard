(function () {
  "use strict";

  const app = angular.module("app");

  app.service("UserService", UserService);

  UserService.$inject = ["$http"];

  function UserService($http) {
    var service = this;
    var users = [];

    $http.get("data/users.json").then((response) => {
      users = response.data.users;
    });

    service.findUser = function (username, password) {
      return users.find(function (user) {
        return user.username === username && user.password === password;
      });
    };

    service.addUser = function (user) {
      $http
        .post("http://localhost:3000/users", JSON.stringify(user))
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  }
})();
