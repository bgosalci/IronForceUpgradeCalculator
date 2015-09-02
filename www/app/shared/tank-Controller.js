angular.module('myApp.tankController', [])
    .controller('tankController', ['$scope', 'dataProvider', '$state', 'store', 'tankService',
        function ($scope, dataProvider, $state, store, tankService) {
            store.save('currentScreen', {screen: $state.current.name});
            console.log('*** Current screen: ', $state.current.name);
            $scope.tanks = dataProvider.getTankList();
            $scope.tankName = store.get('selectedTank');
            $scope.tankDetails = dataProvider.getTanksDetails($scope.tankName);
            $scope.tankStats = {
                attack: 0,
                fireSpeed: 0,
                armor: 0,
                movement: 0
            };

            $scope.goToUpgradeDetails = function (name) {
                $scope.tankName = name;
                $scope.tankDetails = dataProvider.getTanksDetails(name);
                setMaxStats();
                if (store.exists('tankLevels')) {
                    $scope.tankLevels = store.get('tankLevels');
                } else {
                    $scope.tankLevels = {
                        turretLevel: 0,
                        barrelLevel: 0,
                        armorLevel: 0,
                        engineLevel: 0,
                        trucksLevel: 0
                    };
                }
                $scope.calculateTankStats();
                store.save('selectedTank', name);
                $state.go('upgradeDetails');
            };

            $scope.goToTankList = function () {
                $state.go('tankList');
            };

            $scope.calculateTankStats = function() {
                var initialAttack, initialFireSpeed, initialArmor, initialMovement;
                initialAttack = tankService.getInitialValue($scope.tankName, $scope.tanks, 'attack');
                initialFireSpeed = tankService.getInitialValue($scope.tankName, $scope.tanks, 'fireSpeed');
                initialArmor = tankService.getInitialValue($scope.tankName, $scope.tanks, 'armor');
                initialMovement = tankService.getInitialValue($scope.tankName, $scope.tanks, 'movement');
                $scope.tankStats.attack = tankService.calculatePotentialAttack(
                    $scope.tankDetails,
                    $scope.tankLevels.turretLevel,
                    $scope.tankLevels.barrelLevel
                ) + initialAttack;
                $scope.tankStats.fireSpeed = tankService.calculatePotentialFireSpeed(
                    $scope.tankDetails,
                    $scope.tankLevels.turretLevel,
                    $scope.tankLevels.barrelLevel
                ) + initialFireSpeed;
                $scope.tankStats.armor = tankService.calculatePotentialArmor(
                    $scope.tankDetails,
                    $scope.tankLevels.armorLevel,
                    $scope.tankLevels.trucksLevel
                ) + initialArmor;
                $scope.tankStats.armor = tankService.calculatePotentialMovement(
                    $scope.tankDetails,
                    $scope.tankLevels.armorLevel,
                    $scope.tankLevels.engineLevel,
                    $scope.tankLevels.trucksLevel
                ) + initialMovement;
            };

            function setMaxStats() {
                var totalTime, initialAttack, initialFireSpeed, initialArmor, initialMovement;
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
            }
        }
    ]);