(function () {
  "use strict";

  angular.module("app").service("AuthService", AuthService);

  AuthService.$inject = ["$q", "UserService"];

  function AuthService($q, UserService) {
    this.signup = signup;
    this.login = login;
    this.logout = logout;
    this.signup = signup;

    function signup(form) {
      UserService.addUser(form);
    }

    function login(username, password) {
      var deferred = $q.defer();

      var data = UserService.findUser(username, password);

      if (data) {
        sessionStorage.setItem("userLoged", JSON.stringify(data));
        sessionStorage.setItem("isAuthenticated", true);
        deferred.resolve(sessionStorage.getItem("isAuthenticated"));
      } else {
        deferred.reject({
          state: "Error",
          message: "Invalid username or password",
        });
      }
      console.log(sessionStorage.getItem("userLoged"));

      return deferred.promise;
    }

    function logout() {
      sessionStorage.clear();
    }

    this.isAuthenticated = function () {
      return sessionStorage.getItem("isAuthenticated") === "true";
    };

    return this;
  }
})();
