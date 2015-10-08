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

            $scope.selectLevel = function (item, levelsFor, statsFor, $event) {
                $scope.selectedItem = item;
                $scope.selectedItemLevelsFor = levelsFor;
                $scope.selectedItemStatsFor = statsFor;
                $scope.popover.show($event);
            };

            $scope.setLevel = function (value) {
                var item;
                $scope.popover.hide();
                item = $scope.upgradeCalculator[$scope.selectedItemLevelsFor];
                item[$scope.selectedItem] = value;
                $scope.requestTankStatsCalculation($scope.selectedItemStatsFor, $scope.selectedItemLevelsFor);
                $scope.requestPriceAndTimeCalculationForTanksStats($scope.selectedItemLevelsFor);
                $scope.requestTimeAndCostCalculationFromCurrentToPotential();
                store.save($scope.tankName + '.upgradeCalculator', $scope.upgradeCalculator);
            };

            $scope.handleMedalUsage = function () {
                $scope.requestPriceAndTimeCalculationForTanksStats('tankLevels');
                $scope.requestPriceAndTimeCalculationForTanksStats('currentTankLevels');
                $scope.requestTimeAndCostCalculationFromCurrentToPotential();
                store.save($scope.tankName + '.upgradeCalculator', $scope.upgradeCalculator);
            };

            $scope.handleShowHideTankLevels = function () {
                store.save($scope.tankName + '.upgradeCalculator', $scope.upgradeCalculator);
                console.log('$scope.upgradeCalculator.showTankLevels: ', $scope.upgradeCalculator.showTankLevels);
            };

            $scope.$on('$destroy', function() {
                $scope.popover.remove();
            });

            $scope.requestTankStatsCalculation = function(statsSelector, levelsSelector) {
                var calculatedTankStats;
                calculatedTankStats = tankService.calculateTankStats($scope.tankName, $scope.tanks, $scope.tankDetails,
                                                                     $scope.upgradeCalculator, levelsSelector);
                $scope.upgradeCalculator[statsSelector].attack = calculatedTankStats.attack;
                $scope.upgradeCalculator[statsSelector].fireSpeed = calculatedTankStats.fireSpeed;
                $scope.upgradeCalculator[statsSelector].armor = calculatedTankStats.armor;
                $scope.upgradeCalculator[statsSelector].movement = calculatedTankStats.movement;
            };

            $scope.requestPriceAndTimeCalculationForTanksStats = function (selector) {
                var calculatedPriceAndTime, totalTime, item;
                calculatedPriceAndTime = tankService.calculateTimeAndPriceForTankStats($scope.tankDetails, $scope.upgradeCalculator, selector);
                if ($scope.upgradeCalculator.medalUsed) {
                    totalTime = calculatedPriceAndTime.totalTime - ((calculatedPriceAndTime.totalTime / 100) * 25);
                } else {
                    totalTime = calculatedPriceAndTime.totalTime;
                }
                if (selector == 'currentTankLevels') {
                    item = $scope.upgradeCalculator['currentTankUpgradeCostAndTime'];
                } else {
                    item = $scope.upgradeCalculator['tankUpgradeCostAndTime'];
                }
                item.time = totalTime;
                item.displayTime = tankService.formatTotalTime(totalTime);
                item.price = calculatedPriceAndTime.totalPrice;
                item.diamonds = calculatedPriceAndTime.totalDiamonds;
            };

            $scope.requestTimeAndCostCalculationFromCurrentToPotential = function () {
                $scope.upgradeCalculator = tankService.calculateTimeAndCostFromCurrentToPotential($scope.upgradeCalculator);
            };

            function setMaxStats() {
                $scope.tankDetails.max.allMax.totalTime = tankService.formatTotalTime(tankService.calculateTotalTime($scope.tankDetails, false));
                $scope.tankDetails.max.allMax.totalPrice = tankService.calculateTotalPrice($scope.tankDetails, false);
                $scope.tankDetails.max.allMax.totalDiamonds = tankService.calculateTotalDiamonds($scope.tankDetails, false);
                $scope.tankDetails.max.allMax.attack = tankService.calculateTotalAttack($scope.tankDetails)
                        + tankService.getInitialValue($scope.tankName, $scope.tanks, 'attack');
                $scope.tankDetails.max.allMax.fireSpeed = tankService.calculateTotalFireSpeed($scope.tankDetails)
                        + tankService.getInitialValue($scope.tankName, $scope.tanks, 'fireSpeed');
                $scope.tankDetails.max.allMax.armor = tankService.calculateTotalArmor($scope.tankDetails)
                        + tankService.getInitialValue($scope.tankName, $scope.tanks, 'armor');
                $scope.tankDetails.max.allMax.movement = tankService.calculateTotalMovement($scope.tankDetails)
                        + tankService.getInitialValue($scope.tankName, $scope.tanks, 'movement');
            }

            $scope.prepareTankStatsData = function () {
                var currentCalculatorVersion = '0.0.6';
                $scope.tankDetails = dataProvider.getTanksDetails($scope.tankName);
                setMaxStats();
                if (store.exists($scope.tankName + '.upgradeCalculator')) {
                    $scope.upgradeCalculator = store.get($scope.tankName + '.upgradeCalculator');
                    if (!$scope.upgradeCalculator.hasOwnProperty('version') || $scope.upgradeCalculator.version != currentCalculatorVersion) {
                        $scope.upgradeCalculator = tankService.createTankStatData(currentCalculatorVersion);
                    }
                } else {
                    $scope.upgradeCalculator = tankService.createTankStatData(currentCalculatorVersion);
                }
                $scope.selectLevelOptions  = tankService.setSelectLevelOptions($scope.tankDetails.turret.length);
                $scope.requestTankStatsCalculation('tankStats', 'tankLevels');
                $scope.requestTankStatsCalculation('currentTankStats', 'currentTankLevels');
                $scope.requestPriceAndTimeCalculationForTanksStats('tankLevels');
                $scope.requestPriceAndTimeCalculationForTanksStats('currentTankLevels');
                $scope.requestTimeAndCostCalculationFromCurrentToPotential();
            };

            if (store.get('currentScreen') == 'upgradeDetails') {
                $scope.prepareTankStatsData();
            }
        }
    ]);