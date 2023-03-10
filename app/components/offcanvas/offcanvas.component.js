(function () {
  "use strict";

  angular.module("app").component("offcanvas", offcanvas());
  offcanvas.$inject = ["$state", "AuthService", "UserService"];
  function offcanvas() {
    function offcanvasController($state, AuthService, UserService) {
      var vm = this;
      init();

      function init() {
        vm.defaultAvatar = "app/assets/img/Avatar.png";
        vm.logout = logout;
        vm.getFile = getFile;
        vm.user = JSON.parse(localStorage.getItem("userLoged"));
        vm.changeProfile = changeProfile;
      }

      function getFile() {
        var file = vm.selectedFile;
        if (file) {
          var reader = new FileReader();
          reader.onload = function (e) {
            vm.$apply(function () {
              vm.imageUrl = URL.createObjectURL(file);
            });
          };
          reader.readAsDataURL(file);
        }
      }

      function changeProfile(user) {
        console.log(user);
        UserService.update(user);
      }

      function logout() {
        AuthService.logout();
        $state.go("home");
      }
    }

    return {
      bindings: {},
      templateUrl: "app/components/offcanvas/offcanvas.html",
      controller: offcanvasController,
      controllerAs: "vm",
    };
  }
})();
