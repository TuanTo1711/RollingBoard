;(function () {
  'use strict'

  angular.module('app', ['ui.router']).config(routerConfig)

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/pages/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/pages/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about',
      })
      .state('error', {
        url: '/404',
        templateUrl: 'app/pages/error/error.html',
        controller: 'ErrorController',
        controllerAs: 'Error',
      })
    $urlRouterProvider.otherwise('/home')
  }
})()
