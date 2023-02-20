(function () {
  "use strict";

  const app = angular.module("app");

  app.service("UserService", UserService);

  UserService.$inject = ["$http"];

  function UserService($http) {
    var service = this;
    var users = [];

    $http.get("http://localhost:3000/users").then((response) => {
      users = response.data;
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

    service.deleteUser = function (ID) {
      $http.delete(`http://localhost:3000/users/${ID}`).then((res) => {
        console.log(res.data);
      });
    };

    service.update = function (user) {
      $http
        .put(`http://localhost:3000/users/${user.id}`, JSON.stringify(user))
        .then(
          function (response) {
            console.log(response);
            console.log("Data updated successfully!");
          },
          function (error) {
            console.error("Error occurred while updating data:", error);
          }
        );
    };
  }
})();
