class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

(function () {
  "use strict";

  angular.module("app").service("UserService", UserService);

  /** @ngInject */
  function UserService() {

    this.findUser = findUser;

    function findUser() {}
  }
})();

export default User;
