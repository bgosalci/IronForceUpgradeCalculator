angular.module('myApp.tankController', [])
    .controller('tankController', ['$scope', 'dataProvider', '$state', 'store', 'tankService',
        function ($scope, dataProvider, $state, store, tankService) {
            store.save('currentScreen', {screen: $state.current.name});
            console.log('*** Current screen: ', $state.current.name);
            $scope.tanks = dataProvider.getTankList();
            $scope.tankName = store.get('selectedTanks');
            $scope.tankDetails = dataProvider.getTanksDetails($scope.tankName);

            $scope.goToUpgradeDetails = function (name) {
                var totalTime, initialAttack, initialFireSpeed, initialArmor, initialMovement;
                $scope.tankName = name;
                $scope.tankDetails = dataProvider.getTanksDetails(name);
                totalTime = tankService.calculateTotalTime($scope.tankDetails);
                initialAttack = tankService.getInitialValue($scope.tankName, $scope.tanks, 'attack');
                initialFireSpeed = tankService.getInitialValue($scope.tankName, $scope.tanks, 'fireSpeed');
                initialArmor = tankService.getInitialValue($scope.tankName, $scope.tanks, 'armor');
                initialMovement = tankService.getInitialValue($scope.tankName, $scope.tanks, 'movement');
                $scope.tankDetails.max.allMax.totalTime = tankService.formatTotalTime(totalTime);
                $scope.tankDetails.max.allMax.totalPrice = tankService.calculateTotalPrice($scope.tankDetails);
                $scope.tankDetails.max.allMax.totalDiamonds = tankService.calculateTotalDiamonds($scope.tankDetails);
                $scope.tankDetails.max.allMax.attack = tankService.calculateTotalAttack($scope.tankDetails) + initialAttack;
                $scope.tankDetails.max.allMax.fireSpeed = tankService.calculateTotalFireSpeed($scope.tankDetails) + initialFireSpeed;
                $scope.tankDetails.max.allMax.armor = tankService.calculateTotalArmor($scope.tankDetails) + initialArmor;
                $scope.tankDetails.max.allMax.movement = tankService.calculateTotalMovement($scope.tankDetails) + initialMovement;
                store.save('selectedTanks', name);
                $state.go('upgradeDetails');
            };
            $scope.goToTankList = function () {
                $state.go('tankList');
            }
        }
    ]);