(function () {
  "use strict";

  angular.module("app").service("UserService", function ($http) {
    var service = this;
    var users = {};

    $http.get("data/users.json").then((response) => (users = response.data));

    service.findUser = function (username, password) {
      return users.find(function (user) {
        return user.username === username && user.password === password;
      });
    };

    service.addUser = function (user) {
      users.push(user);
      $http({
        method: "POST",
        url: "localhost:3000/data/users.json",
        data: user,
      });
      return $http.put("data/users.json", users);
    };

    service.deleteUser = function (user) {
      return service.getUsers().then(function (data) {
        var index = data.indexOf(user);
        if (index > -1) {
          data.splice(index, 1);
        }
        return $http.put("data/users.json", users);
      });
    };
  });
})();
