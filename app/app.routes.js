(function () {
  "use strict";

  const app = angular.module("app", ["ui.router"]);

  app.config(routerConfig);

  routerConfig.$inject = ["$stateProvider"];

  function routerConfig($stateProvider) {
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "app/pages/home/home.html",
        controller: "HomeController",
      })
      .state("about", {
        url: "/about",
        templateUrl: "app/pages/about/about.html",
        controller: "AboutController",
      })
      .state("login", {
        url: "/login",
        templateUrl: "app/pages/login/login.html",
        controller: "LoginController",
      })
      .state("error", {
        url: "/error",
        templateUrl: "app/pages/error/error.html",
        controller: "ErrorController",
      });
  }
})();
