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
            self.calculateTotalTime = function (tank) {
                var totalTime, items;
                items = ['turret', 'barrel', 'armor', 'engine', 'trucks'];
                totalTime = calculateTotalValues(tank, items, 'calcTime');
                return totalTime;
            };
            self.calculateTotalPrice = function (tank) {
                var totalPrice, items;
                items = ['turret', 'barrel', 'armor', 'engine', 'trucks'];
                totalPrice = calculateTotalValues(tank, items, 'price');
                return totalPrice;
            };
            self.calculateTotalDiamonds = function (tank) {
                var totalDiamonds, items;
                items = ['turret', 'barrel', 'armor', 'engine', 'trucks'];
                totalDiamonds = calculateTotalValues(tank, items, 'diamonds');
                return totalDiamonds;
            };
            self.calculateTotalAttack = function (tank, level) {
                var items, totalAttack;
                items = ['turret', 'barrel'];
                totalAttack = calculateTotalValues(tank, items, 'attack', level);
                return totalAttack;
            };
            self.calculateTotalFireSpeed = function (tank, level) {
                var items, totalFireSpeed;
                items = ['turret', 'barrel'];
                totalFireSpeed = calculateTotalValues(tank, items, 'fireSpeed', level);
                return totalFireSpeed;
            };
            self.calculateTotalArmor = function (tank, level) {
                var items, totalArmor;
                items = ['armor', 'trucks'];
                totalArmor = calculateTotalValues(tank, items, 'armor', level);
                return totalArmor;
            };
            self.calculateTotalMovement = function (tank, level) {
                var items, totalMovement;
                items = ['armor', 'engine', 'trucks'];
                totalMovement = calculateTotalValues(tank, items, 'movement', level);
                return totalMovement;
            };
            self.calculateTankStats = function(tankName, tanks, tankDetails, upgradeCalculator) {
                var initialAttack, initialFireSpeed, initialArmor, initialMovement, returnData;
                initialAttack = self.getInitialValue(tankName, tanks, 'attack');
                initialFireSpeed = self.getInitialValue(tankName, tanks, 'fireSpeed');
                initialArmor = self.getInitialValue(tankName, tanks, 'armor');
                initialMovement = self.getInitialValue(tankName, tanks, 'movement');
                returnData = {
                    attack:     self.calculatePotentialAttack(
                        tankDetails,
                        upgradeCalculator.tankLevels.turretLevel,
                        upgradeCalculator.tankLevels.barrelLevel
                    ) + initialAttack,
                    fireSpeed:  self.calculatePotentialFireSpeed(
                        tankDetails,
                        upgradeCalculator.tankLevels.turretLevel,
                        upgradeCalculator.tankLevels.barrelLevel
                    ) + initialFireSpeed,
                    armor:      self.calculatePotentialArmor(
                        tankDetails,
                        upgradeCalculator.tankLevels.armorLevel,
                        upgradeCalculator.tankLevels.trucksLevel
                    ) + initialArmor,
                    movement:   self.calculatePotentialMovement(
                        tankDetails,
                        upgradeCalculator.tankLevels.armorLevel,
                        upgradeCalculator.tankLevels.engineLevel,
                        upgradeCalculator.tankLevels.trucksLevel
                    ) + initialMovement
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
            function calculateTotalValues(tank, items, property, level) {
                var i, y, totalValue, row, item, len;
                totalValue = 0;
                for (i = 0; i < items.length; i += 1) {
                    item = tank[items[i]];
                    if (angular.isDefined(level)) {
                        len = level;
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