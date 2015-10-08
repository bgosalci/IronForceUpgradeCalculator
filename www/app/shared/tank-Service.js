angular.module('myApp.tankService', [])
    .factory('tankService', [
        function () {
            var self = this;

            self.setSelectLevelOptions = function (levels) {
                var returnValue, i;
                returnValue = [];
                for (i = 0; i < levels; i += 1) {
                    returnValue.push(i+1);
                }
                return returnValue;
            };

            self.calculateTotalTime = function (tank, levels) {
                var totalTime, items;
                items = ['turret', 'barrel', 'armor', 'engine', 'trucks'];
                totalTime = calculateTotalValues(tank, items, levels, 'calcTime');
                return totalTime;
            };

            self.calculateTotalPrice = function (tank, levels) {
                var totalPrice, items;
                items = ['turret', 'barrel', 'armor', 'engine', 'trucks'];
                totalPrice = calculateTotalValues(tank, items, levels, 'price');
                return totalPrice;
            };

            self.calculateTotalDiamonds = function (tank, levels) {
                var totalDiamonds, items;
                items = ['turret', 'barrel', 'armor', 'engine', 'trucks'];
                totalDiamonds = calculateTotalValues(tank, items, levels, 'diamonds');
                return totalDiamonds;
            };

            self.calculateTotalAttack = function (tank) {
                var items, totalAttack;
                items = ['turret', 'barrel'];
                totalAttack = calculateTotalValues(tank, items, false, 'attack');
                return totalAttack;
            };

            self.calculateTotalFireSpeed = function (tank) {
                var items, totalFireSpeed;
                items = ['turret', 'barrel'];
                totalFireSpeed = calculateTotalValues(tank, items, false, 'fireSpeed');
                return totalFireSpeed;
            };

            self.calculateTotalArmor = function (tank) {
                var items, totalArmor;
                items = ['armor', 'trucks'];
                totalArmor = calculateTotalValues(tank, items, false, 'armor');
                return totalArmor;
            };

            self.calculateTotalMovement = function (tank) {
                var items, totalMovement;
                items = ['armor', 'engine', 'trucks'];
                totalMovement = calculateTotalValues(tank, items, false, 'movement');
                return totalMovement;
            };

            self.calculateTankStats = function(tankName, tanks, tankDetails, upgradeCalculator, selector) {
                var returnData, turretLevel, barrelLevel, armorLevel, engineLevel, trucksLevel;
                turretLevel = upgradeCalculator[selector].turretLevel;
                barrelLevel = upgradeCalculator[selector].barrelLevel;
                armorLevel = upgradeCalculator[selector].armorLevel;
                engineLevel = upgradeCalculator[selector].engineLevel;
                trucksLevel = upgradeCalculator[selector].trucksLevel;
                returnData = {
                    attack:     self.calculatePotentialAttack(
                        tankDetails,
                        turretLevel,
                        barrelLevel
                    ) + self.getInitialValue(tankName, tanks, 'attack'),
                    fireSpeed:  self.calculatePotentialFireSpeed(
                        tankDetails,
                        turretLevel,
                        barrelLevel
                    ) + self.getInitialValue(tankName, tanks, 'fireSpeed'),
                    armor:      self.calculatePotentialArmor(
                        tankDetails,
                        armorLevel,
                        trucksLevel
                    ) + self.getInitialValue(tankName, tanks, 'armor'),
                    movement:   self.calculatePotentialMovement(
                        tankDetails,
                        armorLevel,
                        engineLevel,
                        trucksLevel
                    ) + self.getInitialValue(tankName, tanks, 'movement')
                };
                return returnData;
            };

            self.calculateTimeAndPriceForTankStats = function (tank, upgradeCalculator, selector) {
                var returnData, levels;
                levels = [];
                levels.push(upgradeCalculator[selector].turretLevel);
                levels.push(upgradeCalculator[selector].barrelLevel);
                levels.push(upgradeCalculator[selector].armorLevel);
                levels.push(upgradeCalculator[selector].engineLevel);
                levels.push(upgradeCalculator[selector].trucksLevel);
                returnData = {
                    totalTime: self.calculateTotalTime(tank, levels),
                    totalPrice: self.calculateTotalPrice(tank, levels),
                    totalDiamonds: self.calculateTotalDiamonds(tank, levels)
                };
                return returnData;
            };

            self.calculatePotentialAttack = function(tank, turretLevel, barrelLevel) {
                var returnData;
                returnData = calculatePotentialValue(tank, 'turret', 'attack', turretLevel);
                returnData += calculatePotentialValue(tank, 'barrel', 'attack', barrelLevel);
                return returnData;
            };

            self.calculatePotentialFireSpeed = function (tank, turretLevel, barrelLevel) {
                var returnData;
                returnData = calculatePotentialValue(tank, 'turret', 'fireSpeed', turretLevel);
                returnData += calculatePotentialValue(tank, 'barrel', 'fireSpeed', barrelLevel);
                return returnData;
            };

            self.calculatePotentialArmor = function (tank, armorLevel, trucksLevel) {
                var returnData;
                returnData = calculatePotentialValue(tank, 'armor', 'armor', armorLevel);
                returnData += calculatePotentialValue(tank, 'trucks', 'armor', trucksLevel);
                return returnData;
            };

            self.calculatePotentialMovement = function (tank, armorLevel, engineLevel, trucksLevel) {
                var returnData;
                returnData = calculatePotentialValue(tank, 'armor', 'movement', armorLevel);
                returnData += calculatePotentialValue(tank, 'engine', 'movement', engineLevel);
                returnData += calculatePotentialValue(tank, 'trucks', 'movement', trucksLevel);
                return returnData;
            };

            self.calculateTimeAndCostFromCurrentToPotential= function (upgradeCalculator) {
                var current, potential, timeAndCost;
                current = upgradeCalculator.currentTankUpgradeCostAndTime;
                potential = upgradeCalculator.tankUpgradeCostAndTime;
                timeAndCost = upgradeCalculator.timeAndCostFromCurrentToPotentialStats;
                if (potential.time >= current.time) {
                    timeAndCost.time = potential.time - current.time;
                } else {
                    timeAndCost.time = 0;
                }
                if (potential.diamonds >= current.diamonds) {
                    timeAndCost.diamonds = potential.diamonds - current.diamonds;
                } else {
                    timeAndCost.diamonds = 0;
                }
                if (potential.price >= current.price) {
                    timeAndCost.price = potential.price - current.price;
                }
                timeAndCost.displayTime = self.formatTotalTime(timeAndCost.time);
                return upgradeCalculator;
            };

            self.formatTotalTime = function (time) {
                var day, hour, minute, totDays, totHours, totMinutes, returnValue;
                day = 86400; //Seconds per day
                hour = 3600; //Seconds per hour
                minute = 60; //Seconds per minute
                totDays = 0;
                totHours = 0;
                totMinutes = 0;
                //Get days
                if (time >= day) {
                    totDays = Math.floor(time / day);
                    time -= totDays * day;
                }
                //Get hours
                if (time >= hour) {
                    totHours = Math.floor(time / hour) % 24;
                    time -= totHours * hour;
                }
                //Get minutes
                if (time >= minute) {
                    totMinutes = Math.floor(time / minute) % 60;
                }
                returnValue =  (totDays > 0) ? totDays + 'd ' : '';
                returnValue += (totHours > 0) ? totHours + 'h ' : '';
                returnValue += (totMinutes > 0) ? totMinutes + 'm' : '';
                if (returnValue.length == 0) {
                    returnValue = '0';
                }
                return returnValue;
            };

            self.getInitialValue = function (tankName, data, property) {
                var i, returnValue, tank;
                returnValue = 0;
                for (i = 0; i < data.length; i += 1) {
                    tank = data[i];
                    if (tank.name == tankName) {
                        returnValue = tank.basicInfo[property];
                        break;
                    }
                }
                return returnValue;
            };

            self.createTankStatData = function (currentCalculatorVersion) {
                return {
                    version: currentCalculatorVersion,
                    showTankLevels: false,
                    medalUsed: true,
                    tankLevels: {
                        turretLevel: 0,
                        barrelLevel: 0,
                        armorLevel: 0,
                        engineLevel: 0,
                        trucksLevel: 0
                    },
                    currentTankLevels: {
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
                    },
                    currentTankStats: {
                        attack: 0,
                        fireSpeed: 0,
                        armor: 0,
                        movement: 0
                    },
                    tankUpgradeCostAndTime: {
                        price: 0,
                        time: 0,
                        displayTime: '0',
                        diamonds: 0
                    },
                    currentTankUpgradeCostAndTime: {
                        price: 0,
                        time: 0,
                        displayTime: '0',
                        diamonds: 0
                    },
                    timeAndCostFromCurrentToPotentialStats: {
                        price: 0,
                        time: 0,
                        displayTime: '0',
                        diamonds: 0
                    }
                };
            };

            function calculateTotalValues(tank, items, levels, property) {
                var i, y, totalValue, row, item, len;
                totalValue = 0;
                for (i = 0; i < items.length; i += 1) {
                    item = tank[items[i]];
                    if (levels && levels.length > 0) {
                        len = levels[i];
                    } else {
                        len = item.length;
                    }
                    for (y = 0; y < len; y += 1) {
                        row = item[y];
                        totalValue += row[property];
                    }
                }
                return totalValue;
            }
            function calculatePotentialValue(tank, item, property, level) {
                var i, row, thisItem, returnData;
                returnData = 0;
                thisItem = tank[item];
                for (i = 0; i < level; i += 1) {
                    row = thisItem[i];
                    returnData += row[property];
                }
                return returnData;
            }

            return self;
        }
    ]);