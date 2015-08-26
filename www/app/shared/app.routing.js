'use strict';
angular.module('myApp.routing', [])
    .factory('myAppRouting', ['$state', '$ionicPlatform', 'store', '$rootScope',
        function ($state, $ionicPlatform, store, $rootScope) {
            var self = this;
            self.doRouting = function () {
                $ionicPlatform.registerBackButtonAction(function (event) {
                    switch ($state.current.name) {
                        case 'tankList':
                            navigator.app.exitApp();
                            break;
                        default :
                            navigator.app.backHistory();
                            break;
                    }
                }, 100);
            };
            return self;
        }
    ]);