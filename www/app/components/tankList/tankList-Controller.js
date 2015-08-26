angular.module('myApp.tankList-Controller', [])
    .controller('tankList-Controller', ['$scope', 'dataProvider', '$state', 'store',
        function ($scope, dataProvider, $state, store) {
            store.save('currentScreen', {screen: $state.current.name});
            console.log('*** Current screen: ', $state.current.name);
            $scope.tanks = dataProvider.getTankList();
            $scope.tankName = store.get('selectedTanks');
            $scope.tankDetails = dataProvider.getTanksDetails($scope.tankName);

            $scope.goToUpgradeDetails = function (name) {
                $scope.tankName = name;
                $scope.tankDetails = dataProvider.getTanksDetails(name);
                store.save('selectedTanks', name);
                $state.go('upgradeDetails');
            };
            $scope.goToTankList = function () {
                $state.go('tankList');
            }
        }
    ]);