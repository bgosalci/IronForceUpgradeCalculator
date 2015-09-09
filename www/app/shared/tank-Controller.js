angular.module('myApp.tankController', [])
    .controller('tankController', ['$scope', 'dataProvider', '$state', 'store', 'tankService', '$ionicPopover',
        function ($scope, dataProvider, $state, store, tankService, $ionicPopover) {
            store.save('currentScreen', $state.current.name);
            console.log('*** Current screen: ', $state.current.name);
            $scope.tanks = dataProvider.getTankList();
            $scope.tankName = store.get('selectedTank');
            $scope.tankDetails = dataProvider.getTanksDetails($scope.tankName);
            $ionicPopover.fromTemplateUrl('app/components/upgradeDetails/levelSelect-Template.html', {
                scope: $scope
            }).then(function(popover) {
                $scope.popover = popover;
            });

            $scope.goToUpgradeDetails = function (name) {
                $scope.tankName = name;
                $scope.prepareTankStatsData();
                store.save('selectedTank', name);
                $state.go('upgradeDetails');
            };

            $scope.goToTankList = function () {
                $state.go('tankList');
            };

            $scope.selectLevel = function (item, $event) {
                $scope.selectedItem = item;
                $scope.popover.show($event);
            };

            $scope.setLevel = function (value) {
                $scope.popover.hide();
                $scope.upgradeCalculator.tankLevels[$scope.selectedItem] = value;
                store.save($scope.tankName + '.upgradeCalculator', $scope.upgradeCalculator);
                $scope.requestTankStatsCalculation();
            };

            $scope.$on('$destroy', function() {
                $scope.popover.remove();
            });

            $scope.requestTankStatsCalculation = function() {
                var calculatedTankStats;
                calculatedTankStats = tankService.calculateTankStats($scope.tankName, $scope.tanks, $scope.tankDetails, $scope.upgradeCalculator);
                $scope.upgradeCalculator.tankStats.attack = calculatedTankStats.attack;
                $scope.upgradeCalculator.tankStats.fireSpeed = calculatedTankStats.fireSpeed;
                $scope.upgradeCalculator.tankStats.armor = calculatedTankStats.armor;
                $scope.upgradeCalculator.tankStats.movement = calculatedTankStats.movement;
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

            $scope.prepareTankStatsData = function () {
                $scope.tankDetails = dataProvider.getTanksDetails($scope.tankName);
                setMaxStats();
                if (store.exists($scope.tankName + '.upgradeCalculator')) {
                    $scope.upgradeCalculator = store.get($scope.tankName + '.upgradeCalculator');
                } else {
                    $scope.upgradeCalculator = {
                        tankLevels: {
                            turretLevel: 0,
                            barrelLevel: 0,
                            armorLevel: 0,
                            engineLevel: 0,
                            trucksLevel: 0
                        },
                        tankStats: {
                            attack: 0,
                            fireSpeed: 0,
                            armor: 0,
                            movement: 0
                        }
                    };
                }
                $scope.selectLevelOptions  = tankService.setSelectLevelOptions($scope.tankDetails.turret.length);
                $scope.requestTankStatsCalculation();
            };

            if (store.get('currentScreen') == 'upgradeDetails') {
                $scope.prepareTankStatsData();
            }
        }
    ]);