var app = angular.module('soPall', ['ui.router'])

  var app = angular.module('soPall', ['ui.router'])

  app.config(['$httpProvider','$stateProvider','$urlRouterProvider',
  function($httpProvider,$stateProvider, $urlRouterProvider) {


    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'app/js/templates/home.html',
      controller: 'MainCtrl'
    });

    $stateProvider.state('confirm', {
      url: '/user/confirm',
      templateUrl: 'app/js/templates/confirm.html',
      controller: 'MainCtrl'
    });

    $stateProvider.state('complete', {
      url: '/user/complete',
      templateUrl: 'app/js/templates/complete.html',
      controller: 'MainCtrl'
    });




    $urlRouterProvider.otherwise('home');
  }])
