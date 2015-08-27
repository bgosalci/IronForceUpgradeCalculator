
angular.module('myApp', [
    'ionic',
    'myApp.store',
    'myApp.routing',
    'myApp.dataProvider',
    'myApp.tankController',
    'myApp.tankService'
])
    .run(['$ionicPlatform', '$state', 'store', 'myAppRouting',
        function ($ionicPlatform, $state, store, myAppRouting) {
            $ionicPlatform.ready(
                function () {
                    var screen, currentScreen;
                    currentScreen = store.get('currentScreen');
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    if (window.cordova && window.cordova.plugins.Keyboard) {
                        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    }
                    if (window.StatusBar) {
                        StatusBar.styleDefault();
                    }
                    myAppRouting.doRouting();
                    if (currentScreen.screen) {
                        screen = currentScreen.screen;
                        if (screen != '' && screen != $state.current.name) {
                            $state.go(screen);
                        }
                    }
                    store.save('previousEventTransactionId', '');
                }
            );
        }
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider',
             function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
                 $ionicConfigProvider.scrolling.jsScrolling(false);
                 $stateProvider
                     //Tank List
                     .state('tankList', {
                         cache: false,
                         url: '/tankList',
                         templateUrl: 'app/components/tankList/tankList-View.html',
                         controller: 'tankController'
                     })
                     .state('upgradeDetails', {
                         cache: false,
                         url: '/upgradeDetails',
                         templateUrl: 'app/components/upgradeDetails/upgradeDetails-View.html',
                         controller: 'tankController'
                     });
                 $urlRouterProvider.otherwise('/tankList');
             }
    ]);
