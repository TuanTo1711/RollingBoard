(function () {
  "use strict";

  const app = angular.module("app", ["ui.router"]);

  app.config(routerConfig);

  routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "app/pages/home/home.html",
        controller: "HomeController",
        controllerAs: "HomeCtrl",
      })

      .state("about", {
        url: "/about",
        templateUrl: "app/pages/about/about.html",
        controller: "AboutController",
        controllerAs: "AboutCtrl",
      })

      .state("login", {
        url: "/login",
        templateUrl: "app/pages/login/login.html",
        controller: "LoginController",
        controllerAs: "LoginCtrl",
      })

      .state("signup", {
        url: "/signup",
        templateUrl: "app/pages/signup/signup.html",
        controller: "SignUpController",
        controllerAs: "SignUpCtrl",
      })

      .state("price", {
        url: "/price",
        templateUrl: "app/pages/price/price.html",
        controller: "PriceController",
        controllerAs: "PriceCtrl",
      })
      .state("resetpassword", {
        url: "/resetpassword",
        templateUrl: "app/pages/reset_password/reset_password.html",
        controller: "RSPWController",
        controllerAs: "RSPWCtrl",
      })

      .state("board", {
        url: "/board",
        templateUrl: "app/pages/board/board.html",
        controller: "BoardController",
        controllerAs: "BoardCtrl",
      })

      .state("error", {
        url: "/error",
        templateUrl: "app/pages/error/error.html",
        controller: "ErrorController",
        controllerAs: "ErrorCtrl",
      });

    $urlRouterProvider.otherwise("/");
  }
})();
