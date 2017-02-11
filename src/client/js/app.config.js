
(function() {
  'use strict';

  angular.module('app.config', [])
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'register',
        url: '/register',
        component: 'register'
      })
      .state({
        name: 'login',
        url: '/login',
        component: 'login'
      });
  }

}());
