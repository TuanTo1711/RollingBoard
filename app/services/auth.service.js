(function () {
  "use strict";

  angular.module("app").service("AuthService", AuthService);

  AuthService.$inject = ["$q"];

  function AuthService($q) {
    this.login = login;
    this.logout = logout;

    function login(username, password) {
      var deferred = $q.defer();
      // Xử lý logic đăng nhập tại đây, ví dụ kiểm tra username và password có trùng khớp với các giá trị đã được lưu trữ trước đó
      if (username === "user" && password === "123456") {
        sessionStorage.setItem("isAuthenticated", true);
        deferred.resolve(sessionStorage.getItem("isAuthenticated"));
      } else {
        deferred.reject({
          message: "Invalid username or password",
        });
      }
      return deferred.promise;
    }

    function logout() {
      sessionStorage.removeItem("isAuthenticated");
    }

    this.isAuthenticated = function () {
      return sessionStorage.getItem("isAuthenticated") === "true";
    };

    return this;
  }
})();
